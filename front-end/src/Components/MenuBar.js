import React, {useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/menuBar.css';
import imgLine from '../Images/Line.svg';
import { Container } from "./MenuBarsStyle";
import { AppContext } from './AppProvider';

const MenuBar = () => {

  const { setCategoryType,hasSession, typeAccount , path} = useContext(AppContext);

  useEffect(()=>{
    setCategoryType("All");

  },[setCategoryType]);

  const logOut = () => {
    sessionStorage.clear();
    alert('session ended');
    window.location.replace(path);
}
const handleChange = (type) =>{
  setCategoryType(type);
} 

const Greeting = () => {

  if (hasSession) {
    return <>
          <li className="menuItem" ><Link to="/myAccount">My Account</Link></li>
          <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li> 
          <li className="menuItem" ><Link to="/myOrders">My Orders</Link></li>
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
                    <li className="menuItem" ><Link onClick={()=>handleChange("All")} to="/productFeed">All</Link></li>
                    <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                    <li className="menuItem" ><Link onClick={()=>handleChange("Fruit")} to="/productFeed">Fruit</Link></li>
                    <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                    <li className="menuItem" ><Link onClick={()=>handleChange("Vegetables")} to="/productFeed">Vegetables</Link></li>
                    {/* <li className="menuItem" onClick={()=> handleChange("Vegetables")}>Vegetables</li> */}
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




// const MenuBar = (props) => {
//   const { setCategoryType,hasSession, typeAccount } = useContext(AppContext);

//   const navigate = useNavigate();

//   const logOut = () => {
//     sessionStorage.clear();
//     alert('session ended');
//     window.location.replace("/");
// }
// const handleChange = (type) =>{
//   setCategoryType(type);
//   navigate('/productFeed');
// } 

// const Greeting = () => {
//   // const isLoggedIn = props.isLoggedIn;
//   if (hasSession) {
//     return <>
//           <li className="menuItem" ><Link to="/myAccount">My Account</Link></li>
//           <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li> 
//           {typeAccount === "Farmer" && <>
//             <li className="menuItem" ><Link to="/addProduct">Register Product</Link></li>
//             <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li> 
//             <li className="menuItem" ><Link to="/myProducts">My Products</Link></li>
//             <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li> </>
//           }
//           <li className="menuItem" ><Link onClick={logOut}to="/">Log out</Link></li>
//           </>;
//   }
// };
//   return(
//             <Container>
//                  <ul className='menuList'>
//                   <div id='menuItemLogout'>
//                   {/* <li className="menuItem" ><Link to="/productFeed" state={{ categoryType: "All" }}>All</Link></li> */}
//                     <li className="menuItem" onClick={() => setCategoryType("All") && navigate('/productFeed')}>All</li>
//                     <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
//                     {/* <li className="menuItem" ><Link to="/productFeed" state={{ categoryType: "Fruit" }}>Fruit</Link></li> */}
//                     <li className="menuItem" onClick={() => setCategoryType("Fruit") }>Fruit</li>
//                     <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
//                     {/* <li className="menuItem" ><Link to="/productFeed" state={{ categoryType: "Vegetables" }}>Vegetables</Link></li> */}
//                     <li className="menuItem" onClick={() => setCategoryType("Vegetables")}>Vegetables</li>
//                     {/* <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
//                     <li className="menuItem"><a href="!#">Dairy &#38; Eggs</a></li>
//                     <li className="menuItem"><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
//                     <li className="menuItem"><a href="!#">Pantry</a></li>
//                     <li className="menuItem" ><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
//                     <li className="menuItem"><a href="!#">Meat</a></li> */}
//                   </div>
//                     <div id='menuItemLogin'>
//                       <Greeting/>
//                     </div>
//                  </ul>
//             </Container>
//         );
// }

// export default MenuBar;