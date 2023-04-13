import React, {useState, useEffect, useContext } from 'react';
import CartItem from './CartItem';
import { Container } from './MyCartStyle';
import { AppContext } from './AppProvider'
// import '../Styles/productFeed.css';

const MyCart = () =>   {

const { cart, setCart , cartPrice, setCartPrice} = useContext(AppContext);

    return (
        <Container>
            <div id='myCart'>
                <h1>My Cart</h1>
                <p>My items:</p>
                <ul className='productList'>
                    {Object.entries(cart).map(([key,product]) => (<CartItem className="productItem" key={key} productItem = {product} 
                    />))}
                </ul>
                <p>Total price: ${cartPrice}</p>
            </div>
        </Container>
        
    );
}

   export default MyCart; 
