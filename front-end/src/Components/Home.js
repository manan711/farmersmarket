import React, {useEffect, useState}from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import MenuBar from './MenuBar';
// import CustomerListOfProduts from "./CustomerListOfProduts";
import CreateAccount from './CreateAccount';
import MyAccount from './MyAccount'
import Login from './Login';
import AddProduct from "./AddProduct";
import ProductsFeed from "./ProductsFeed";
import { AppContext} from './AppProvider';
import MyProduct from "./MyProduct";
import EditProduct from "./EditProduct";
import MyCart from "./MyCart";
import Receipt from "./Receipt";
import MyOrders from "./MyOrders";

const Home = () => {

    // const url = 'http://localhost/backend/';
    // const path = 'http://localhost:3000';
    const path = 'http://localhost:5000/www/';
    const url = 'http://localhost:5000/www/';

    const [user_id,setUserId] = useState('');
    const [userName,setUserName] = useState('');
    const [hasSession,setHasSession] = useState(false);
    const [cart, setCart] = useState({});
    const [cartPrice, setCartPrice] = useState(0);
    const [categoryType,setCategoryType] = useState("All");
    const [typeAccount,setTypeAccount] = useState("");

    useEffect(() => {
        if(sessionStorage.getItem("id")){
             setUserId(sessionStorage.getItem("id"));
             setUserName(sessionStorage.getItem("name"));
             setTypeAccount(sessionStorage.getItem("typeOfAccount"));
            //  setAccountId(sessionStorage.getItem("accountID"));
             setHasSession(true);
            // getUser();
        }

        const newCart = JSON.parse(sessionStorage.getItem("myCart"));
        if(!(newCart === null)){
            setCart(newCart);
        }
        const totalPrice = sessionStorage.getItem("totalPrice");
        if(!(totalPrice === null)){
            setCartPrice(totalPrice);
        }else{
            sessionStorage.setItem("totalPrice", cartPrice);
        }

    }, [setCart,setCartPrice ,cartPrice]);

    return (
        <>
           <AppContext.Provider value={{url,path, user_id,cart,setCart,userName, categoryType, typeAccount, hasSession,setCategoryType , cartPrice, setCartPrice}}>
             <BrowserRouter>
                 {/* <Header name = {userName} session = {hasSession}/> */}
                 <Header/> 
                 <MenuBar session = {hasSession}/>
                 {/* <ProductsFeed /> */}
                 <Routes>
                 {/* <Route exact path="/" element={<Home />}/> */}
                 <Route exact path="/www" element={<ProductsFeed />}/>
                 <Route path="/login" element={<Login/>} />
                 <Route path="/createAccount" element={<CreateAccount />} /> 
                 <Route path="/myAccount" element={<MyAccount />} /> 
                 <Route path="/addProduct" element={<AddProduct />} /> 
                 <Route path="/productFeed" element={<ProductsFeed />} /> 
                 <Route path="/myProducts" element={<MyProduct />} /> 
                 <Route path="/editProduct" element={<EditProduct />} /> 
                 <Route path="/myCart" element={<MyCart />} /> 
                 <Route path="/receipt" element={<Receipt />} /> 
                 <Route path="/myOrders" element={<MyOrders />} /> 
                 </Routes>
             </BrowserRouter>
             </AppContext.Provider>
         </>
    )
}


export default Home;

