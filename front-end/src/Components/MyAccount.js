import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoMarket from "../Images/Logo_MarketPlace.png"
import '../Styles/createAccount.css';

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: sessionStorage.getItem("id"),
            firstName: '',
            lastName:'',
            email: '',
            address:'',
            city:'',
            password: '',
            phoneNumber:'',
            message: '',
            selectedOption: ''
        }; 
        this.onValueChange = this.onValueChange.bind(this);
    }

    componentDidMount() {
        this.getUser();
    }
    getUser(){
        var that = this;
        // fetch('http://localhost:8080/api/users', {
        fetch('http://localhost/backend/getUserById.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserId: this.state.id
            }) 
        })
        .then( (response) => {
            return response.json()
        }).then( (data) => {
            
            that.setState({
                firstName: data.FirstName,
                lastName: data.LastName,
                email: data.Email,
                address: data.Address,
                city: data.City,
                password: data.Password,
                phoneNumber: data.PhoneNumber,
                selectedOption: data.TypeAccount,
            })
        }).catch(() => this.setState({...that.state, message: 'User not created'}));
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        var that = this;
        
        // fetch('http://localhost:8080/api/users', {
        fetch('http://localhost/backend/updateUser.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserId: this.state.id,
                FirstName: this.state.firstName,
                LastName: this.state.lastName,
                Email: this.state.email,
                Address: this.state.address,
                City:this.state.city,
                Password: this.state.password,
                PhoneNumber:this.state.phoneNumber,
                TypeAccount: this.state.selectedOption
            }) 
        })
        .then( (response) => {
            return response.json()
        }).then( (data) => {
            if(data.status){
                that.setState({...that.state, message: data.message});
            }else{
                that.setState({...that.state, message: data.message});
            }
            
        });
    }; 

    onValueChange(event) {
      this.setState({
        selectedOption: event.target.value
      });
    }

render() {
    return (
        <div className='createAccountPage'>
        <img src={logoMarket} className="farmLogin" alt="logo" />
        <h1>My account</h1>
        <form  className="createAccountForm" onSubmit={this.handleSubmit}>
            <label className = "labelCreateAccount" htmlFor="firstName">First Name </label> 
            <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="lastName">Last Name </label> 
            <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="email">Email </label> 
            <input className = "inputCreateAccount" type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="address">Address </label> 
            <input className = "inputCreateAccount" type="text" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="city">City </label> 
            <input className = "inputCreateAccount" type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleChange} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="phoneNumber">Phone Number </label> 
            <input className = "inputCreateAccount" type="text" name="phoneNumber" placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.handleChange} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="password">Password </label> 
            <input className = "inputCreateAccount" type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="confirmPassword">Confirm Password </label> 
            <input className = "inputCreateAccount" type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="accountType">Your account type </label> 
            <input className = "inputCreateAccount" type="text" name="accountType" placeholder="account" value={this.state.selectedOption} disabled/>
            <br/>
            <button type="submit">Update Account</button>
            <p>{this.state.message}</p>
        </form>
        <Link className='linkTo' to="/login">Go back to Login</Link>
        </div>
    );
    }
}

   export default MyAccount; 