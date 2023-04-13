import React,{useContext} from 'react';
import {Container} from './ProductCardStyle';
import { AppContext } from './AppProvider'
// import '../Styles/productCard.css';



function CustomerListOfProduts (props) {
    const { cart,setCart } = useContext(AppContext);
    

    return(
        <Container>
            <div className="blockItem">
                <div>
                <img src={props.productImage} className="ImgItem" alt="ImgItem"/>
                </div>
                <p className="ItemName">{props.productName}</p>
                <p className="ItemPrice">$ {props.productPrice}</p>
                <button className="btnItem" onClick={() => setCart(cart + 1)}>ADD</button>
            </div>
        </Container>
    );
}

export default CustomerListOfProduts;