import React, {Component}from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import MenuBar from './MenuBar';
// import CustomerListOfProduts from "./CustomerListOfProduts";
import CreateAccount from './CreateAccount';
import MyAccount from './MyAccount'
import Login from './Login';


class Home extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            userName: '',
            hasSession: false
        }; 
    }
    componentDidMount() {
        this.validateSession();
    }
    async validateSession () {
        var that = this;
        if(sessionStorage.getItem("id")){
            await that.setState({user_id: sessionStorage.getItem("id"),userName: sessionStorage.getItem("name") ,hasSession: true});
            
            this.getUser();
        }

    };

    getUser () {
        var that = this;
        fetch('http://localhost/backend/getUserById.php', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },body: JSON.stringify({
                user_id: that.state.user_id
            }) 
        }).then( (response) => {
            return response.json()
        })
        .then( (data) => {
            console.log(data)
            that.setState({
                userName: data.firstName,
                hasSession: true
            })
            
           
        }).catch(() => this.setState({...that.state, message: 'Usuario invalidooo'}));
    }

    

    render() {
        
    return(
        <>
            <BrowserRouter>
                <Header name = {this.state.userName} session = {this.state.hasSession}/>
                <MenuBar session = {this.state.hasSession}/>
                <Routes>
                {/* <Route exact path="/" element={<Home/>}/> */}
                <Route exact path="/login" element={<Login/>} />
                <Route path="/createAccount" element={<CreateAccount />} /> 
                <Route path="/myAccount" element={<MyAccount />} /> 
                </Routes>
            </BrowserRouter>
            {/* <BrowserRouter>
                <Routes> */}
                    {/* <MenuBar session = {this.state.hasSession}/> */}
                {/* </Routes>
            </BrowserRouter> */}
            {/* <CustomerListOfProduts/> */}
        </>
        
    );
    }
}

export default Home;