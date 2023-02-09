import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
function Login() {
  const navigate=useNavigate();
  const [data,setData]=useState({
    email:"",
    password:"",
    
  })
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitForm=(e)=>{
    e.preventDefault();
    const sendData={
      email:data.email,
      password:data.password,
    }
    setData({
      email:"",
      password:"",
    })
    axios.post('http://localhost/farm_marketplace/src/Backend/login.php',sendData)
    .then(res=> console.log(res.data))
    .then(navigate('/'))
    .then(res=>window.localStorage.setItem('name',res.data.name))
    .catch(error => {
      console.log(error.response)
  });
  }
  return (
    <div>
    <h3>Login</h3>
      <form onSubmit={submitForm} >
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  onChange={handleChange} value={data.name}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleChange} value={data.name}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default Login;