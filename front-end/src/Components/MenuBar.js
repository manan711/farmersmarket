import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/StyleCostumer.css';
import imgLine from '../Images/Line.svg';


function logOut(){
    sessionStorage.clear();
    alert('session ended');
    window.location.replace("/");
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <>
          <li className="listMenu"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li> 
          <li className="listMenu" ><a><Link to="/myAccount">My Account</Link></a></li>
          <li className="listMenu"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li> 
          <li className="listMenu" ><a><Link onClick={logOut}to="/">Log out</Link></a></li>
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
        <div>
             <ul>
                <li className="listMenu" ><a> Fruit &#38; Vegetables </a></li>
                <li className="listMenu"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                <li className="listMenu"><a>Dairy &#38; Eggs</a></li>
                <li className="listMenu"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                <li className="listMenu"><a>Pantry</a></li>
                <li className="listMenu" ><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                <li className="listMenu"><a>Meat</a></li>
                <li className="listMenu"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                <li className="listMenu" ><a>See all products</a></li>
                <Greeting isLoggedIn={this.props.session} />
             </ul>
        </div>
    );
}
}

export default MenuBar;