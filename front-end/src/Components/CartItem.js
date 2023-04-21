import React,{useContext, useState} from 'react';
import {Container} from './CartItemStyle';
import { AppContext } from './AppProvider'
// import '../Styles/productCard.css';



function CartItem (props) {
    const {cart, setCart , cartPrice, setCartPrice} = useContext(AppContext);
    const [qty, setQty] = useState(0);

    const handleAdd  =  (product, key) =>{
            const newCart = JSON.parse(sessionStorage.getItem("myCart"));
            //setQty(qty+1);
            newCart[product.ProductID].qtyItem += 1
            newCart[product.ProductID].totalPriceItem = Number(newCart[product.ProductID].totalPriceItem) + Number(newCart[product.ProductID].ProductPrice);
            setCart(newCart);
            sessionStorage.setItem("myCart", JSON.stringify(newCart));
            let totalPrice = sessionStorage.getItem("totalPrice");
            totalPrice = Number(totalPrice) + Number(product.ProductPrice);
            setCartPrice(totalPrice);
            sessionStorage.setItem("totalPrice", parseFloat(totalPrice).toFixed(2));
    }

    const handleRemove  =  (product, key) =>{
        const newCart = JSON.parse(sessionStorage.getItem("myCart"));
        if(newCart[product.ProductID].qtyItem > 1) {
            newCart[product.ProductID].qtyItem -= 1
            newCart[product.ProductID].totalPriceItem =  Number(cart[product.ProductID].totalPriceItem) - Number(cart[product.ProductID].ProductPrice);
            setCart(newCart);
            sessionStorage.setItem("myCart", JSON.stringify(newCart));
        }else{
            delete newCart[product.ProductID];
            setCart(newCart);
            sessionStorage.setItem("myCart", JSON.stringify(newCart));
        }
        //setQty(qty-1);
        let totalPrice = sessionStorage.getItem("totalPrice");
        totalPrice = Number(totalPrice) - Number(product.ProductPrice);
        setCartPrice(totalPrice);
        sessionStorage.setItem("totalPrice", parseFloat(totalPrice).toFixed(2));
    }


    return(
        
        <Container>
            <div className="blockItem">
                <div id='blockItemLeft'>
                    <img src={props.productItem.ProductImageURL} className="ImgItem" alt="ImgItem"/>
                    <p id="ItemName">{props.productItem.ProductName}</p>
                </div>
                {cartPrice > 0 && !!cart[props.productItem.ProductID] &&
                    <div id='groupButtonCart'>
                        <button id="btnRemove" onClick={() => handleRemove(props.productItem, props.key)} >-</button>
                        <p>Qty: {cart[props.productItem.ProductID].qtyItem} </p>
                        <button id="btnAdd" onClick={() => handleAdd(props.productItem, props.key)} >+</button>
                    </div> 
                }
                <p id="ItemPrice">$ {parseFloat(cart[props.productItem.ProductID].totalPriceItem).toFixed(2)}</p>
            </div>
        </Container>
    );
}

export default CartItem;