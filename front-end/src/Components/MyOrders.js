import React, {useState, useEffect, useContext} from 'react';
import { Container } from './MyOrdersStyle';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppProvider';

const MyOrders = () =>   {

    const { url} = useContext(AppContext);

    let cont = 0;

    const UserId  = sessionStorage.getItem("id");

    const navigate = useNavigate();
    

    const [orderList, setOrderList] = useState([]);

    useEffect(()=>{
        if(!sessionStorage.getItem("id")){
            navigate('/');
        }
        fetch(url + 'getListOfOrdersById.php', {
        // fetch('http://localhost/backend/getListOfOrdersById.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserId: UserId
            }) 
        })
        .then( (response) => {
            return response.json()
        }).then( (data) => {
            setOrderList(data);
        });
        
    },[UserId, url, navigate]);


    const handleDetail  =  (order) =>{
        navigate('/receipt',{state:{orderId: order.OrderId}});
        // <Navigate to="/editProduct" state={product}/>;
    } 

    return (
        
        <Container>
            <h1>My Orders</h1>
            <table>
                <tr>
                    <th></th>
                    <th>Date</th>
                    <th>Sub-total</th>
                    <th>Tax</th>
                    <th>Total price</th>
                    <th></th>
                </tr>
                {orderList.map((order, key) => {
                    return (
                        <tr key={order.OrderId}>
                        <td>{cont++}</td>
                        <td>{order.OrderDate}</td>
                        <td>{order.SubTotal}</td>
                        <td>{order.Tax}</td>
                        <td>{order.TotalPrice}</td>
                        <td><button onClick={() => handleDetail(order)}  id='btnEdit'>Detail</button></td>
                        </tr>
                    )
                })}
            </table>
        </Container>
        
    );
}

   export default MyOrders; 


