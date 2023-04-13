import React, {useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/menuBar.css';
import imgLine from '../Images/Line.svg';
import { Container } from "./MenuBarsStyle";
import { AppContext } from './AppProvider';


const MenuBar = (props) => {
  const { setCategoryType,hasSession, typeAccount } = useContext(AppContext);

  const logOut = () => {
    sessionStorage.clear();
    alert('session ended');
    window.location.replace("/");
}

const Greeting = () => {
  // const isLoggedIn = props.isLoggedIn;
  if (hasSession) {
    return <>
          <li className="menuItem" ><Link to="/myAccount">My Account</Link></li>
          <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li> 
          {typeAccount === "Farmer" && <>
            <li className="menuItem" ><Link to="/addProduct">Register Product</Link></li>
            <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li> 
            <li className="menuItem" ><Link to="/myProducts">My Products</Link></li>
            <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li> </>
          }
          <li className="menuItem" ><Link onClick={logOut}to="/">Log out</Link></li>
          </>;
  }
};
  return(
            <Container>
                 <ul className='menuList'>
                  <div id='menuItemLogout'>
                  {/* <li className="menuItem" ><Link to="/productFeed" state={{ categoryType: "All" }}>All</Link></li> */}
                    <li className="menuItem" onClick={() => setCategoryType("All")}>All</li>
                    <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                    {/* <li className="menuItem" ><Link to="/productFeed" state={{ categoryType: "Fruit" }}>Fruit</Link></li> */}
                    <li className="menuItem" onClick={() => setCategoryType("Fruit")}>Fruit</li>
                    <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                    {/* <li className="menuItem" ><Link to="/productFeed" state={{ categoryType: "Vegetables" }}>Vegetables</Link></li> */}
                    <li className="menuItem" onClick={() => setCategoryType("Vegetables")}>Vegetables</li>
                    {/* <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                    <li className="menuItem"><a href="!#">Dairy &#38; Eggs</a></li>
                    <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                    <li className="menuItem"><a href="!#">Pantry</a></li>
                    <li className="menuItem" ><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                    <li className="menuItem"><a href="!#">Meat</a></li> */}
                  </div>
                    <div id='menuItemLogin'>
                      <Greeting/>
                    </div>
                 </ul>
            </Container>
        );
}

export default MenuBar;


// class MenuBar extends Component  {

//   constructor(props) {
//     super(props);
//     this.state = {
//     }; 
//   }
  
// render() {
  
//     return(
//         <Container>
//              <ul className='menuList'>
//               <div id='menuItemLogout'>
//               {/* <li className="menuItem" ><Link to="/productFeed" state={{ categoryType: "All" }}>All</Link></li> */}
//               <li className="menuItem" onClick={() => setCategoryType("All")}></li>
//                 <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
//                 {/* <li className="menuItem" ><Link to="/productFeed" state={{ categoryType: "Fruit" }}>Fruit</Link></li> */}
//                 <li className="menuItem" onClick={() => setCategoryType("Fruit")}></li>
//                 <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
//                 {/* <li className="menuItem" ><Link to="/productFeed" state={{ categoryType: "Vegetables" }}>Vegetables</Link></li> */}
//                 <li className="menuItem" onClick={() => setCategoryType("Vegetables")}></li>
//                 {/* <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
//                 <li className="menuItem"><a href="!#">Dairy &#38; Eggs</a></li>
//                 <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
//                 <li className="menuItem"><a href="!#">Pantry</a></li>
//                 <li className="menuItem" ><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
//                 <li className="menuItem"><a href="!#">Meat</a></li> */}
//               </div>
//                 <div id='menuItemLogin'>
//                   <Greeting isLoggedIn={this.props.session} />
//                 </div>
//              </ul>
//         </Container>
//     );
// }
// }