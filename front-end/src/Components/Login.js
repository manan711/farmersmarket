
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoMarket from "../Images/Logo_MarketPlace.png"
import '../Styles/login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: ''
        }; 
    
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        var that = this;
        
        // fetch('http://localhost:5000/www/login.php', {
        fetch('http://localhost/backend/login.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.email,
                Password: this.state.password
            }) 
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if(data.status){
                sessionStorage.setItem("id", data.UserId);
                sessionStorage.setItem("name", data.FirstName);
                if(data.TypeAccount === "Customer"){
                    sessionStorage.setItem("CustomerId", data.accountID);
                }else if(data.TypeAccount === "Farmer"){
                    sessionStorage.setItem("FarmerId", data.accountID);
                }
               
               that.setState({...that.state, message: data.message})
               window.location.replace("/");
            }else{
                that.setState({...that.state, message: 'Invalid user'})
            }
            
        });
    }; 


render() {
    return (
        <div className='loginPage'>
            <img src={logoMarket} className="farmLogin" alt="logo" />
            <form className="formLogin" onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email </label> 
                <input className = "loginInput" type="text" name="email" placeholder="email" value={this.state.username} onChange={this.handleChange} required/>
                <br/>
                <label htmlFor="password">Password </label> 
                <input className = "loginInput" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}required/>
                <br/>
                <button type="submit">Login</button>
                <p>{this.state.message}</p>
            </form>
            <Link className='linkTo' to="/createAccount">Create Account</Link>
            {/* <Link className='linkTo' to="/www/createAccount">Create Account</Link> */}

        </div>
    );
    }
}

   export default Login; 





// import React from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router';
// import axios from 'axios';
// function Login() {
//   const navigate=useNavigate();
//   const [data,setData]=useState({
//     email:"",
//     password:"",
    
//   })
//   const handleChange=(e)=>{
//     setData({...data,[e.target.name]:e.target.value})
//   }
//   const submitForm=(e)=>{
//     e.preventDefault();
//     const sendData={
//       email:data.email,
//       password:data.password,
//     }
//     setData({
//       email:"",
//       password:"",
//     })
//     axios.post('http://localhost/farm_marketplace/src/Backend/login.php',sendData)
//     .then(res=> console.log(res.data))
//     .then(navigate('/'))
//     .then(res=>window.localStorage.setItem('name',res.data.name))
//     .catch(error => {
//       console.log(error.response)
//   });
//   }
//   return (
//     <div>
//     <h3>Login</h3>
//       <form onSubmit={submitForm} >
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  onChange={handleChange} value={data.name}/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleChange} value={data.name}/>
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
//     </div>
//   );
// }

// export default Login;