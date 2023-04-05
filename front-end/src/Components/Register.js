import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
function Register() {
  const navigate=useNavigate();
  const [data,setData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    status:""
  })
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitForm=(e)=>{
    e.preventDefault();
    if(data.password===data.confirmPassword){

    
    const sendData={
      name:data.name,
      email:data.email,
      password:data.password,
      confirmPassword:data.confirmPassword
    }
    console.log(sendData)
    setData({
      name:"",
      email:"",
      password:"",
      confirmPassword:""
    })
    
    axios.post('http://localhost/farm_marketplace/src/Backend/register.php',sendData)
    .then(res=> {
      if(res.data.Status==="Invalid"){
        alert("Invalid User");
      }else{
        navigate('/');
      }
    })
    .catch(error => {
      console.log(error.response)
  });

  }
    
  }
  return (
    <div>
       <form onSubmit={submitForm}>
       <h3>Register</h3>
       <div className="mb-3">
        <label for="exampleInputName" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name='name' onChange={handleChange} value={data.name}/>

      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'  onChange={handleChange} value={data.email}/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" name='password'  onChange={handleChange} value={data.password}/>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" name='confirmPassword'  onChange={handleChange} value={data.confirmPassword}/>
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

export default Register;