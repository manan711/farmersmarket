import React, { useContext } from 'react';
import logoMarket from "../Images/Logo_MarketPlace.png"
import iconSearch from "../Images/Interface_Search.svg"
import iconProfile from "../Images/Icon-profile.svg";
import iconCart  from "../Images/Icon-cart.svg";
import { Container } from "./HeaderStyle";
import { AppContext } from './AppProvider';



const Header = (props) => {
   
   function handleLogin(){
      window.location.replace("login");
   }
   const { cart } = useContext(AppContext);
  
  const UseName = () => {
   return <>
            <img src={iconProfile} id="Icon-Profile" alt="Icon-Profile"/> 
            <p>Hello, {props.name}</p> 
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
                {props.session && UseName() }
                {!props.session && UseButtonLogin() }
             </div>
             <div id="informationCart">
                <img src={iconCart} id="Icon-Cart" alt="Icon-Cart"/>
                <p id="cartPrice">$ {cart}</p>
                <button id="btnCheckout">Checkout</button>
             </div>
        </Container>

    );
  
}

export default Header;
    

// function UseName(props) {
//    return <>
//             <img src={iconProfile} id="Icon-Profile" alt="Icon-Profile"/> 
//             <p>Hello, {props.name}</p> 
//          </>
//    }
    
// function UseButtonLogin() {
// return <button className="btnItem" onClick={handleLogin}>Login</button>;
// }
// function Greeting(props) {
//    const isLoggedIn = props.isLoggedIn;
//    if (isLoggedIn) {
//       return <UseName  name = {props.name}/>;
//    }
//    return <UseButtonLogin />;
//    }


// class Header extends Component {
   
//    constructor(props) {
//       super(props);
//       this.state = {
//       }; 
//   }
  
//   UseName() {
//    return <>
//             <img src={iconProfile} id="Icon-Profile" alt="Icon-Profile"/> 
//             <p>Hello, {this.props.name}</p> 
//          </>
//    }
    
// UseButtonLogin() {
// return <button className="btnItem" onClick={handleLogin}>Login</button>;
// }
//   render() {


//     return(
//         <Container>
//              <img src={logoMarket} alt="logo" />
//              <div id="seacrhProducts">
//                 <input type="text" placeholder="Search for products" id="inpSearch"></input>
//                 <button id="btnSearch">Search <img src={iconSearch} id="Icon-Search" alt="Icon-Search"/></button>
//              </div>
//              <div id="informationUser">
//                 {this.props.session && this.UseName() }
//                 {!this.props.session && this.UseButtonLogin() }
//              </div>
//              <div id="informationCart">
//                 <img src={iconCart} id="Icon-Cart" alt="Icon-Cart"/>
//                 <p id="cartPrice">$ 0.00</p>
//                 <button id="btnCheckout">Checkout</button>
//              </div>
//         </Container>

//     );
//   }
// }

