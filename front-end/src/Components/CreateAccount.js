import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoMarket from "../Images/Logo_MarketPlace.png"
import '../Styles/createAccount.css';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        var that = this;
        
        // fetch('http://localhost:8080/api/users', {
        fetch('http://localhost/backend/createAccount.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
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
            that.setState({...that.state, message: "User created"});
            alert('User created successfully!!');
            window.location.replace("/login");
        }).catch(() => this.setState({...that.state, message: 'User not created'}));
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
        <h1>Create an account</h1>
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
            <input className = "inputCreateAccount" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="confirmPassword">Confirm Password </label> 
            <input className = "inputCreateAccount" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
            <br/>
            <div>
            <label className = "labelCreateAccount" > Select your account type. </label> 
            <label className="radioTypeOfAccount">
            <input className="radioInput"  type="radio" value="Customer" checked={this.state.selectedOption === "Customer" } onChange={this.onValueChange} />
             Customer </label>
            <label className="radioTypeOfAccount">
            <input className="radioInput" type="radio" value="Farmer" checked={this.state.selectedOption === "Farmer"} onChange={this.onValueChange} />
             Farmer </label>
            </div>
            <button type="submit">Creat account</button>
            <p>{this.state.message}</p>
        </form>
        <Link className='linkTo' to="/login">Go back to Login</Link>
        </div>
    );
    }
}

   export default CreateAccount; 


// import React from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router';
// function Register() {
//   const navigate=useNavigate();
//   const [data,setData]=useState({
//     name:"",
//     email:"",
//     password:"",
//     confirmPassword:"",
//     status:""
//   })
//   const handleChange=(e)=>{
//     setData({...data,[e.target.name]:e.target.value})
//   }
//   const submitForm=(e)=>{
//     e.preventDefault();
//     if(data.password===data.confirmPassword){

    
//     const sendData={
//       name:data.name,
//       email:data.email,
//       password:data.password,
//       confirmPassword:data.confirmPassword
//     }
//     console.log(sendData)
//     setData({
//       name:"",
//       email:"",
//       password:"",
//       confirmPassword:""
//     })
    
//     axios.post('http://localhost/farm_marketplace/src/Backend/register.php',sendData)
//     .then(res=> {
//       if(res.data.Status==="Invalid"){
//         alert("Invalid User");
//       }else{
//         navigate('/');
//       }
//     })
//     .catch(error => {
//       console.log(error.response)
//   });

//   }
    
//   }
//   return (
//     <div>
//        <form onSubmit={submitForm}>
//        <h3>Register</h3>
//        <div className="mb-3">
//         <label for="exampleInputName" className="form-label">Name</label>
//         <input type="text" className="form-control" id="name" name='name' onChange={handleChange} value={data.name}/>

//       </div>
//       <div className="mb-3">
//         <label for="exampleInputEmail1" className="form-label">Email address</label>
//         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'  onChange={handleChange} value={data.email}/>
//         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//       </div>
//       <div className="mb-3">
//         <label for="exampleInputPassword1" className="form-label">Password</label>
//         <input type="password" className="form-control" id="exampleInputPassword1" name='password'  onChange={handleChange} value={data.password}/>
//       </div>
//       <div className="mb-3">
//         <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
//         <input type="password" className="form-control" id="exampleInputPassword1" name='confirmPassword'  onChange={handleChange} value={data.confirmPassword}/>
//       </div>
//     <div className="mb-3 form-check">
//       <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//       <label className="form-check-label" for="exampleCheck1">Check me out</label>
//     </div>
//     <button type="submit" className="btn btn-primary">Submit</button>
// </form>
// </div>
//   );
// }

// export default Register;