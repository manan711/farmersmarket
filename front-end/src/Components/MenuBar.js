import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/menuBar.css';
import imgLine from '../Images/Line.svg';
import { Container } from "./MenuBarsStyle";


function logOut(){
    sessionStorage.clear();
    alert('session ended');
    window.location.replace("/");
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <>
          <li className="menuItem" ><Link to="/myAccount">My Account</Link></li>
          <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li> 
          <li className="menuItem" ><Link to="/addProduct">Register Product</Link></li>
          <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li> 
          <li className="menuItem" ><Link onClick={logOut}to="/">Log out</Link></li>
          </>;
  }
};

class MenuBar extends Component  {

  constructor(props) {
    super(props);
    this.state = {
    }; 
  }
  
render() {

    return(
        <Container>
             <ul className='menuList'>
              <div id='menuItemLogout'>
              <li className="menuItem" ><Link to="/productFeed" state={{ categoryType: "All" }}>All</Link></li>
                <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                <li className="menuItem" ><Link to="/productFeed" state={{ categoryType: "Fruit" }}>Fruit</Link></li>
                <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                <li className="menuItem" ><Link to="/productFeed" state={{ categoryType: "Vegetables" }}>Vegetables</Link></li>
                {/* <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                <li className="menuItem"><a href="!#">Dairy &#38; Eggs</a></li>
                <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                <li className="menuItem"><a href="!#">Pantry</a></li>
                <li className="menuItem" ><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                <li className="menuItem"><a href="!#">Meat</a></li> */}
              </div>
                <div id='menuItemLogin'>
                  <Greeting isLoggedIn={this.props.session} />
                </div>
             </ul>
        </Container>
    );
}
}

export default MenuBar;