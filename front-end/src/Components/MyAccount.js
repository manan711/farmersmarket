import React, {useState, useEffect, useContext} from 'react';
import {useNavigate } from 'react-router-dom';
import {Container} from './MyAccountStyle';
import { AppContext } from './AppProvider';
// import '../Styles/createAccount.css';

const MyAccount = () => {

    const { url, user_id} = useContext(AppContext);
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setmMssage] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedProvince, setSelectedProvince] = useState('');

      const provinces = [
        { value: 'AB', label: 'Alberta' },
        { value: 'BC', label: 'British Columbia' },
        { value: 'MB', label: 'Manitoba' },
        { value: 'NB', label: 'New Brunswick' },
        { value: 'NL', label: 'Newfoundland and Labrador' },
        { value: 'NT', label: 'Northwest Territories' },
        { value: 'NS', label: 'Nova Scotia' },
        { value: 'NU', label: 'Nunavut' },
        { value: 'ON', label: 'Ontario' },
        { value: 'PE', label: 'Prince Edward Island' },
        { value: 'QC', label: 'Quebec' },
        { value: 'SK', label: 'Saskatchewan' },
        { value: 'YT', label: 'Yukon' }
      ];

    useEffect(()=>{
        if(!sessionStorage.getItem("id")){
            navigate('/');
        }
        fetch(url + 'getUserById.php', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    UserId: user_id
                }) 
            })
            .then( (response) => {
                return response.json()
            }).then( (data) => {
                setFirstName(data.FirstName);
                setLastName(data.LastName);
                setEmail(data.Email);
                setAddress(data.Address);
                setCity(data.City);
                setPassword(data.Password);
                setPhoneNumber(data.PhoneNumber);
                setSelectedOption(data.TypeAccount);
                setSelectedProvince(data.Province);

            }).catch(() => setmMssage('User not created'));
        
        
    },[url, user_id, navigate]);

    const handleProvinceChange = event => {
        event.preventDefault();
        setSelectedProvince(event.target.value);
      }

    const handleSubmit = event => {
        event.preventDefault();
        
        fetch(url + 'updateUser.php', {
    
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserId: user_id,
                FirstName: firstName,
                LastName: lastName,
                Email: email,
                Address: address,
                City:city,
                Password: password,
                Province: selectedProvince,
                PhoneNumber: phoneNumber,
                TypeAccount: selectedOption
            }) 
        })
        .then( (response) => {
            return response.json()
        }).then( (data) => {
            console.log(data);
            if(data.status){
                setmMssage(data.message);
                alert('User updated successfully!!');
            }else{
                setmMssage(data.message);
            }
            
        });
    }; 

    return (
        <Container>
        <h1>My account</h1>
        <form  className="myAccountForm" onSubmit={handleSubmit}>
            <label className = "labelMyAccount" htmlFor="firstName">First Name </label> 
            <input className = "inputMyAccount" type="text" name="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
            <br/>
            <label className = "labelMyAccount" htmlFor="lastName">Last Name </label> 
            <input className = "inputMyAccount" type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}required/>
            <br/>
            <label className = "labelMyAccount" htmlFor="email">Email </label> 
            <input className = "inputMyAccount" type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <br/>
            <label className = "labelMyAccount" htmlFor="address">Address </label> 
            <input className = "inputMyAccount" type="text" name="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}required/>
            <br/>
            <label className = "labelMyAccount" htmlFor="city">City </label> 
            <input className = "inputMyAccount" type="text" name="city" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required/>
            <br/>
            <label className = "labelMyAccount" htmlFor="city">Province </label> 
            <select className = "inputMyAccount" value={selectedProvince} onChange={handleProvinceChange}>
                    <option value={provinces[selectedProvince]}></option>
                    {provinces.map((province) => (
                        <option key={province.value} value={province.value}>{province.label}</option>
                    ))}
            </select>
            <br/>
            <label className = "labelMyAccount" htmlFor="phoneNumber">Phone Number </label> 
            <input className = "inputMyAccount" type="text" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}required/>
            <br/>
            <label className = "labelMyAccount" htmlFor="password">Password </label> 
            <input className = "inputMyAccount" type="text" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <br/>
            <label className = "labelMyAccount" htmlFor="accountType">Your account type </label> 
            <input className = "inputMyAccount" type="text" name="accountType" placeholder="account" value={selectedOption} disabled/>
            <br/>
            <button type="submit">Update Account</button>
            <p>{message}</p>
        </form>
        </Container>
    );

}

   export default MyAccount; 


