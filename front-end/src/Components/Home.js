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

const Home = () => {

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
        console.log(newCart);
        if(!(newCart === null)){
            console.log("reconheceu");
            setCart(newCart);
        }
        const totalPrice = sessionStorage.getItem("totalPrice");
        if(!(totalPrice === null)){
            setCartPrice(totalPrice);
        }else{
            sessionStorage.setItem("totalPrice", cartPrice);
        }

    }, []);

    return (
        <>
           <AppContext.Provider value={{user_id,cart,setCart,userName, categoryType, typeAccount, hasSession,setCategoryType , cartPrice, setCartPrice}}>
             <BrowserRouter>
                 {/* <Header name = {userName} session = {hasSession}/> */}
                 <Header/> 
                 <MenuBar session = {hasSession}/>
                 {/* <ProductsFeed /> */}
                 <Routes>
                 <Route exact path="/" element={<ProductsFeed />}/>
                 <Route path="/login" element={<Login/>} />
                 <Route path="/createAccount" element={<CreateAccount />} /> 
                 <Route path="/myAccount" element={<MyAccount />} /> 
                 <Route path="/addProduct" element={<AddProduct />} /> 
                 <Route path="/productFeed" element={<ProductsFeed />} /> 
                 <Route path="/myProducts" element={<MyProduct />} /> 
                 <Route path="/editProduct" element={<EditProduct />} /> 
                 <Route path="/myCart" element={<MyCart />} /> 
                 </Routes>
             </BrowserRouter>
             </AppContext.Provider>
         </>
    )
}


export default Home;

// class Home extends Component  {

//     constructor(props) {
//         super(props);
//         this.state = {
//             user_id: '',
//             userName: '',
//             hasSession: false
//         }; 
//     }
//     componentDidMount() {
//         this.validateSession();
//     }
//     async validateSession () {
//         var that = this;
//         if(sessionStorage.getItem("id")){
//             await that.setState({user_id: sessionStorage.getItem("id"),userName: sessionStorage.getItem("name") ,hasSession: true});
            
//             this.getUser();
//         }

//     };

//     getUser () {
//         var that = this;
//         fetch('http://localhost/backend/getUserById.php', {
//             method: 'GET',
//             headers: {
//             'Content-Type': 'application/json'
//             },body: JSON.stringify({
//                 user_id: that.state.user_id
//             }) 
//         }).then( (response) => {
//             return response.json()
//         })
//         .then( (data) => {
//             console.log(data)
//             that.setState({
//                 userName: data.firstName,
//                 hasSession: true
//             })
            
           
//         }).catch(() => this.setState({...that.state, message: 'Usuario invalidooo'}));
//     }

    

//     render() {
        
//     return(
//         <>
//             <AppContext.Provider>
//             <BrowserRouter>
//                 <Header name = {this.state.userName} session = {this.state.hasSession}/>
//                 <MenuBar session = {this.state.hasSession}/>
//                 <Routes>
//                 {/* <Route exact path="/" element={<Home/>}/> */}
//                 <Route exact path="/login" element={<Login/>} />
//                 <Route path="/createAccount" element={<CreateAccount />} /> 
//                 <Route path="/myAccount" element={<MyAccount />} /> 
//                 <Route path="/addProduct" element={<AddProduct />} /> 
//                 <Route path="/productFeed" element={<ProductsFeed />} /> 
//                 </Routes>
//             </BrowserRouter>
//             </AppContext.Provider>
//             {/* <BrowserRouter>
//                 <Routes> */}
//                     {/* <MenuBar session = {this.state.hasSession}/> */}
//                 {/* </Routes>
//             </BrowserRouter> */}
//             {/* <CustomerListOfProduts/> */}
//         </>
        
//     );
//     }
// }

