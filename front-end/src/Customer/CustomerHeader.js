import React from "react";
import logoMarket from "../Images/Logo_MarketPlace.png"
import iconSearch from "../Images/Interface_Search.svg"
import iconProfile from "../Images/Icon-profile.svg";
import iconCart  from "../Images/Icon-cart.svg";


function CustomerHeader  (props) {

   function handleLogin(){
      window.location.replace("login");
   }

   function UseName(props) {
   return <>
            <img src={iconProfile} id="Icon-Profile" alt="Icon-Profile"/> 
            <p>Hello, {props.name}</p> 
         </>
   }
    
   function UseButtonLogin() {
   return <button className="btnItem" onClick={handleLogin}>Login</button>;
   }
   function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UseName  name = {props.name}/>;
      }
      return <UseButtonLogin />;
    }
    return(
        <div className="CustomerHeader">
             <img src={logoMarket} className="Farm-logo" alt="logo" />
             <div id="seacrhProducts">
                <input type="text" placeholder="Search for products" id="inpSearch"></input>
                <button id="btnSearch">Search <img src={iconSearch} id="Icon-Search" alt="Icon-Search"/></button>
             </div>
             <div id="informationUser">
                
                <Greeting isLoggedIn={props.session} name = {props.name}/>
             </div>
             <div id="informationCart">
                <img src={iconCart} id="Icon-Cart" alt="Icon-Cart"/>
                <p id="cartPrice">$ 0.00</p>
                <button id="btnCheckout">Checkout</button>
             </div>
        </div>

    );
}

export default CustomerHeader;