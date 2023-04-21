import React, {useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { Container } from './MyCartStyle';
import { AppContext } from './AppProvider'
// import '../Styles/productFeed.css';

const MyCart = () =>   {

const { url, cart, setCart , cartPrice, setCartPrice} = useContext(AppContext);

const focusPayment = useRef(null);
const navigate = useNavigate();

const currentDate = new Date();
const [numberCard, setNumberCard] = useState('');
const [selectedMonth, setSelectedMonth] = useState('');
const [year, setYear] = useState('');
const [checkout, setCheckout] = useState(false);
const [userId, setUserId] = useState('');
const [userProvince, setUserProvince] = useState('');

const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ];

  const taxRatesCanada = {
    "AB": 0.05,
    "BC": 0.07,
    "MB": 0.07,
    "NB": 0.10,
    "NL": 0.15,
    "NT": 0.05,
    "NS": 0.15,
    "NU": 0.05,
    "ON": 0.13,
    "PE": 0.15,
    "QC": 0.09975,
    "SK": 0.06,
    "YT": 0.05
  };

const handleYearChange = event => {
    event.preventDefault();
    setSelectedMonth(event.target.value);
}

const getUser = async() =>{
    const id = sessionStorage.getItem("id");
    setUserId(id);
    await fetch(url + 'getUserById.php', {
    // await fetch('http://localhost/backend/getUserById.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserId: id
            }) 
        })
        .then( (response) => {
            return response.json()
        }).then( (data) => {
            setUserProvince(data.Province);
            
        }).catch(() => alert('error fetch'));
        
}

useEffect(() => {
    if (focusPayment.current) {
      focusPayment.current.focus();
      getUser();
    }
  }, [checkout]);

const calculateTotalPrice = () => {
    const tax = taxRatesCanada[userProvince];
    const totalTax = cartPrice * tax;
    const newTotalPrice = (Number(cartPrice) + Number(totalTax)).toFixed(2);

    return {totalTax, newTotalPrice}

}
const goToCheckout = () =>{

    if(!sessionStorage.getItem("id")){
        navigate('/login');
    }
    setCheckout(true);
}

  const handleSubmit = async event => {
    event.preventDefault();
    const {totalTax,newTotalPrice} = calculateTotalPrice();

    fetch(url + 'createOrder.php', {
    // fetch('http://localhost/backend/createOrder.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            UserId: userId,
            OrderDate: currentDate,
            Tax: totalTax,
            SubTotal: cartPrice,
            TotalPrice: newTotalPrice,
            CartItem: cart

        }) 
    })
    .then( (response) => {
        return response.json()
    }).then( (data) => {
        alert("order placed successfully! " + data.OrderId);
        setCartPrice(0);
        sessionStorage.setItem("totalPrice", 0);
        sessionStorage.removeItem("myCart");
        setCart({});
        navigate('/receipt',{state:{orderId: data.OrderId}});
    }).catch(() => 'Order not created');

  }


    return (
        <Container>
            <div id='myCart'>
                <h1>My Cart</h1>
                <p>My items:</p>
                <ul className='productList'>
                    {Object.entries(cart).map(([key,product]) => (<CartItem className="productItem" key={key} productItem = {product} 
                    />))}
                </ul>
                <p>Sub-total price: ${cartPrice}</p>
                <button id="btnCheckout" onClick={()=> goToCheckout()}>Proceed to checkout</button>
            </div>
            {checkout &&
                    <form ref={focusPayment} tabIndex={-1} className="checkout" onSubmit={handleSubmit}>
                        <h2> Payment method</h2>
                        <div className='rowCheckout'>
                            <label className = "labelCheckout" htmlFor="inputNumberCard">Credit Card Number: </label> 
                            <input className = "inputCheckout" type="text" name="nainputNumberCardme" placeholder="0000-0000-0000-0000" value={numberCard}  onChange={(e) => setNumberCard(e.target.value)} />
                        </div>
                        <div className='rowCheckout'>
                        <label className = "labelCheckout" htmlFor="inputMonth">Expire Month: </label> 
                            <select className = "inputMonthCheckout" value={selectedMonth} onChange={handleYearChange}>
                                <option value=""></option>
                                {months.map((month) => (
                                    <option key={month} value={month}>
                                    {month}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='rowCheckout'>
                            <label className = "labelCheckout" htmlFor="inputYear">Expire Year: </label> 
                            <input className = "inputCheckout" type="text" name="inputYear" placeholder=""  min="2023" max="2027" value={year}  onChange={(e) => setYear(e.target.value)} />
                        </div>
                    <button id="btnCheckout" type="submit">Make payment </button>
                </form>
            }
        </Container>
        
    );
}

   export default MyCart; 

