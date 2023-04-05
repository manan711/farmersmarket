import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/StyleCostumer.css';
import imgLine from '../Images/Line.svg';


function CustomerMenu (props) {

    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
          return <>
                <li className="listMenu"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li> 
                <li className="listMenu" ><a><Link to="/myAccount">My Account</Link></a></li>
                </>;
        }
      }

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
                <Greeting isLoggedIn={props.session} />
             </ul>
        </div>
    );
}

export default CustomerMenu;