import React, { useContext } from 'react';
import logoMarket from "../Images/Logo_MarketPlace.png"
import iconSearch from "../Images/Interface_Search.svg"
import iconProfile from "../Images/Icon-profile.svg";
import iconCart  from "../Images/Icon-cart.svg";
import { Container } from "./HeaderStyle";
import { AppContext } from './AppProvider';
import { useNavigate } from 'react-router-dom';



const Header = () => {
   
   const navigate = useNavigate();


   function handleLogin(){
      navigate('/login');
   }
   const { cartPrice, userName, hasSession } = useContext(AppContext);
  
  const UseName = () => {
   return <>
            <img src={iconProfile} id="Icon-Profile" alt="Icon-Profile"/> 
            <p>Hello, {userName}</p> 
         </>
   }
    
const UseButtonLogin = () => {
   return <button className="btnItem" onClick={handleLogin}>Login</button>;
}
  

    return(
        <Container>
             <img src={logoMarket} alt="logo" />
             <div id="seacrhProducts">
                <input type="text" placeholder="Search for products" id="inpSearch"></input>
                <button id="btnSearch">Search <img src={iconSearch} id="Icon-Search" alt="Icon-Search"/></button>
             </div>
             <div id="informationUser">
                {hasSession && UseName() }
                {!hasSession && UseButtonLogin() }
             </div>
             <div id="informationCart">
                <img src={iconCart} id="Icon-Cart" alt="Icon-Cart"/>
                <p id="cartPrice">${parseFloat(cartPrice).toFixed(2)}</p>
                <button id="btnCheckout" onClick={()=> navigate('/myCart')}>My Cart</button>
             </div>
        </Container>

    );
  
}

export default Header;
    
