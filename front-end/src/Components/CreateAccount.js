import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoMarket from "../Images/Logo_MarketPlace.png";
import { Container } from "./CreateAccountStyle";
import { AppContext } from './AppProvider';
// import '../Styles/createAccount.css';

const CreateAccount = () => {

    const navigate = useNavigate();
    const { url} = useContext(AppContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setmMssage] = useState('');
    const [selectedOption, setSelectedOption] = useState('Customer');
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
    
      const handleProvinceChange = event => {
        event.preventDefault();
        setSelectedProvince(event.target.value);
      }
    


    const handleSubmit = async event => {
        event.preventDefault();
        
        // fetch('http://localhost:5000/www/createAccount.php', {
        fetch(url + 'createAccount.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FirstName: firstName,
                LastName: lastName,
                Email: email,
                Address: address,
                City: city,
                Province: selectedProvince,
                Password: password,
                PhoneNumber:phoneNumber,
                TypeAccount: selectedOption
            }) 
        })
        .then( (response) => {
            return response.json()
        }).then( (data) => {
            console.log(data);
            setmMssage("User created");
            setmMssage('User not created');
            // that.setState({...that.state, message: "User created"});
            alert('User created successfully!!');
            navigate('/login');
        }).catch(() => setmMssage('User not created'));
    }; 

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <Container>
        <img src={logoMarket} className="farmLogin" alt="logo" />
        <h1>Create an account</h1>
        <form  className="createAccountForm" onSubmit={handleSubmit}>
            <label className = "labelCreateAccount" htmlFor="firstName">First Name </label> 
            <input className = "inputCreateAccount" type="text" name="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="lastName">Last Name </label> 
            <input className = "inputCreateAccount" type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="email">Email </label> 
            <input className = "inputCreateAccount" type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="address">Address </label> 
            <input className = "inputCreateAccount" type="text" name="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="city">City </label> 
            <input className = "inputCreateAccount" type="text" name="city" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="productCategory">Province</label> 
            <select className = "inputCreateAccount" value={selectedProvince} onChange={handleProvinceChange}required>
                <option value=""></option>
                {provinces.map((province) => (
                    <option key={province.value} value={province.value}>
                    {province.label}
                    </option>
                ))}
            </select>
            <br/>
            <label className = "labelCreateAccount" htmlFor="phoneNumber">Phone Number </label> 
            <input className = "inputCreateAccount" type="text" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="password">Password </label> 
            <input className = "inputCreateAccount" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="confirmPassword">Confirm Password </label> 
            <input className = "inputCreateAccount" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <br/>
            <div id='radioGroup'>
            <label className = "labelRadioCreateAccount" > Account type. </label> 
            <label className="inputCreateAccount">
            <input className="radioInput"  type="radio" value="Customer" checked={selectedOption === "Customer" } onChange={handleChange} />
             Customer </label>
            <label className="inputCreateAccount">
            <input className="radioInput" type="radio" value="Farmer" checked={selectedOption === "Farmer"} onChange={handleChange} name="options"/>
             Farmer </label>
            </div>
            <button type="submit">Creat account</button>
            <p>{message}</p>
        </form>
        <Link className='linkTo' to="/login">Go back to Login</Link>
        </Container>
    );
 }

   export default CreateAccount; 


