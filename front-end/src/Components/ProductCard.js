import React,{useContext, useState} from 'react';
import {Container} from './ProductCardStyle';
import { AppContext } from './AppProvider'
// import '../Styles/productCard.css';



function ProductCard (props) {

    const { cart, setCart , cartPrice, setCartPrice} = useContext(AppContext);
    const [qty, setQty] = useState(0);

    const handleAdd  =  (product, key) =>{

        if(!cart[product.ProductID]){
            //setQty(qty+1);
            const newCart = {
                ...cart,
                [product.ProductID]: {
                    ...product,
                    qtyItem: 1,
                    totalPriceItem: product.ProductPrice
                }
                
            }
            setCart(newCart);
            console.log(newCart);
            sessionStorage.setItem("myCart", JSON.stringify(newCart));
        }else{
            const newCart = JSON.parse(sessionStorage.getItem("myCart"));
            
            //setQty(qty+1);
            newCart[product.ProductID].qtyItem += 1
            newCart[product.ProductID].totalPriceItem = Number(newCart[product.ProductID].totalPriceItem) + Number(newCart[product.ProductID].ProductPrice);
            setCart(newCart);
            sessionStorage.setItem("myCart", JSON.stringify(newCart));
        }
        let totalPrice = sessionStorage.getItem("totalPrice");
        totalPrice = Number(totalPrice)+ Number(product.ProductPrice);
        console.log(totalPrice);
        setCartPrice(totalPrice);
        sessionStorage.setItem("totalPrice", parseFloat(totalPrice).toFixed(2));
    }

    const handleRemove  =  (product, key) =>{
         const newCart = JSON.parse(sessionStorage.getItem("myCart"));
        if(newCart[product.ProductID].qtyItem > 1) {
            newCart[product.ProductID].qtyItem -= 1;
            newCart[product.ProductID].totalPriceItem =  Number(newCart[product.ProductID].totalPriceItem) - Number(newCart[product.ProductID].ProductPrice);
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
                <div>
                <img src={props.productItem.ProductImageURL} className="ImgItem" alt="ImgItem"/>
                </div>
                <p className="ItemName">{props.productItem.ProductName}</p>
                <p className="ItemPrice">$ {props.productItem.ProductPrice}</p>
                {!cart[props.productItem.ProductID] && <button className="btnItem" onClick={() => handleAdd(props.productItem, props.key)} >ADD</button>}
                {cartPrice > 0 && !!cart[props.productItem.ProductID] &&
                    <div id='groupButtonCart'>
                        <button id="btnRemove" onClick={() => handleRemove(props.productItem, props.key)} >-</button>
                        <button id="btnAdd" onClick={() => handleAdd(props.productItem, props.key)} >+</button>
                    </div> 
                }
                <p>Qty: {((cart[props.productItem.ProductID] || {}).qtyItem) || 0} </p>
            </div>
        </Container>
    );
}

export default ProductCard;