import React from "react";
import logoMarket from "../Images/Logo_MarketPlace.png"
import iconSearch from "../Images/Interface_Search.svg"
import iconProfile from "../Images/Icon-profile.svg";
import iconCart  from "../Images/Icon-cart.svg";
import '../Styles/StyleCostumer.css';



function CustomerHeader () {
    return(
        <div className="CustomerHeader">
             <img src={logoMarket} className="Farm-logo" alt="logo" />
             <div id="seacrhProducts">
                <input type="text" placeholder="Search for products" id="inpSearch"></input>
                <button id="btnSearch">Search <img src={iconSearch} id="Icon-Search" alt="Icon-Search"/></button>
             </div>
             <div id="informationUser">
                <img src={iconProfile} id="Icon-Profile" alt="Icon-Profile"/>
                <p>Hello, Name</p>
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