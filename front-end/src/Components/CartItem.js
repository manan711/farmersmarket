import React,{useContext, useState} from 'react';
import {Container} from './CartItemStyle';
import { AppContext } from './AppProvider'
// import '../Styles/productCard.css';



function CartItem (props) {
    const {cart, setCart , cartPrice, setCartPrice} = useContext(AppContext);
    const [qty, setQty] = useState(0);

    const handleAdd  =  (product, key) =>{

            setQty(qty+1);
            cart[product.ProductID].qtyItem += 1
            cart[product.ProductID].totalPriceItem = cart[product.ProductID].totalPriceItem + cart[product.ProductID].ProductPrice;
            let totalPrice = sessionStorage.getItem("totalPrice");
            totalPrice = parseFloat(totalPrice) + product.ProductPrice
            setCartPrice(totalPrice);
            sessionStorage.setItem("totalPrice", totalPrice);
    }

    const handleRemove  =  (product, key) =>{

        if(cart[product.ProductID].qtyItem > 1) {
            cart[product.ProductID].qtyItem -= 1
            cart[product.ProductID].totalPriceItem =  cart[product.ProductID].totalPriceItem - cart[product.ProductID].ProductPrice;
            setCart(cart);
        }else{
            delete cart[product.ProductID];
            setCart(cart);
        }
        setQty(qty-1);
        let totalPrice = sessionStorage.getItem("totalPrice");
        totalPrice = parseFloat(totalPrice) - product.ProductPrice
        setCartPrice(totalPrice);
        sessionStorage.setItem("totalPrice", totalPrice);
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
                <p id="ItemPrice">$ {cart[props.productItem.ProductID].totalPriceItem}</p>
            </div>
        </Container>
    );
}

export default CartItem;