import React, {Component}from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerHeader from './CustomerHeader';
import CustomerMenu from './CustomerMenu';
import CustomerListOfProduts from "./CustomerListOfProduts";



class Customer extends Component  {

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
            <CustomerHeader name = {this.state.userName} session = {this.state.hasSession}/>
            {/* <BrowserRouter>
                <Routes> */}
                    <CustomerMenu session = {this.state.hasSession}/>
                {/* </Routes>
            </BrowserRouter> */}
            <CustomerListOfProduts/>
        </>
        
    );
    }
}

export default Customer;