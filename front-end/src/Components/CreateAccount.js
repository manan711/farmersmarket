import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logoMarket from "../Images/Logo_MarketPlace.png";
import { Container } from "./CreateAccountStyle";
// import '../Styles/createAccount.css';

const CreateAccount = () => {

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
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'New Brunswick',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon'
      ];
    
      const handleProvinceChange = event => {
        event.preventDefault();
        setSelectedProvince(event.target.value);
      }
    


    const handleSubmit = async event => {
        event.preventDefault();
        
        // fetch('http://localhost:8080/api/users', {
        fetch('http://localhost/backend/createAccount.php', {
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
            window.location.replace("/login");
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
            <select className = "inputCreateAccount" value={selectedProvince} onChange={handleProvinceChange}>
                <option value=""></option>
                {provinces.map((province) => (
                    <option key={province} value={province}>
                    {province}
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




//    class CreateAccount extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: '',
//             lastName:'',
//             email: '',
//             address:'',
//             city:'',
//             password: '',
//             phoneNumber:'',
//             message: '',
//             selectedOption: ''
//         }; 
//         this.onValueChange = this.onValueChange.bind(this);
    
//     }
//     handleChange = event => {
//         this.setState({ [event.target.name]: event.target.value });
//     };

//     handleSubmit = event => {
//         event.preventDefault();
//         var that = this;
        
//         // fetch('http://localhost:8080/api/users', {
//         fetch('http://localhost/backend/createAccount.php', {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 FirstName: this.state.firstName,
//                 LastName: this.state.lastName,
//                 Email: this.state.email,
//                 Address: this.state.address,
//                 City:this.state.city,
//                 Password: this.state.password,
//                 PhoneNumber:this.state.phoneNumber,
//                 TypeAccount: this.state.selectedOption
//             }) 
//         })
//         .then( (response) => {
//             return response.json()
//         }).then( (data) => {
//             that.setState({...that.state, message: "User created"});
//             alert('User created successfully!!');
//             window.location.replace("/login");
//         }).catch(() => this.setState({...that.state, message: 'User not created'}));
//     }; 

//     onValueChange(event) {
//       this.setState({
//         selectedOption: event.target.value
//       });
//     }

// render() {
//     return (
//         <Container>
//         <img src={logoMarket} className="farmLogin" alt="logo" />
//         <h1>Create an account</h1>
//         <form  className="createAccountForm" onSubmit={this.handleSubmit}>
//             <label className = "labelCreateAccount" htmlFor="firstName">First Name </label> 
//             <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} required/>
//             <br/>
//             <label className = "labelCreateAccount" htmlFor="lastName">Last Name </label> 
//             <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} required/>
//             <br/>
//             <label className = "labelCreateAccount" htmlFor="email">Email </label> 
//             <input className = "inputCreateAccount" type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} required/>
//             <br/>
//             <label className = "labelCreateAccount" htmlFor="address">Address </label> 
//             <input className = "inputCreateAccount" type="text" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} required/>
//             <br/>
//             <label className = "labelCreateAccount" htmlFor="city">City </label> 
//             <input className = "inputCreateAccount" type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleChange} required/>
//             <br/>
//             <label className = "labelCreateAccount" htmlFor="phoneNumber">Phone Number </label> 
//             <input className = "inputCreateAccount" type="text" name="phoneNumber" placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.handleChange} required/>
//             <br/>
//             <label className = "labelCreateAccount" htmlFor="password">Password </label> 
//             <input className = "inputCreateAccount" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
//             <br/>
//             <label className = "labelCreateAccount" htmlFor="confirmPassword">Confirm Password </label> 
//             <input className = "inputCreateAccount" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
//             <br/>
//             <div>
//             <label className = "labelCreateAccount" > Select your account type. </label> 
//             <label className="radioTypeOfAccount">
//             <input className="radioInput"  type="radio" value="Customer" checked={this.state.selectedOption === "Customer" } onChange={this.onValueChange} />
//              Customer </label>
//             <label className="radioTypeOfAccount">
//             <input className="radioInput" type="radio" value="Farmer" checked={this.state.selectedOption === "Farmer"} onChange={this.onValueChange} />
//              Farmer </label>
//             </div>
//             <button type="submit">Creat account</button>
//             <p>{this.state.message}</p>
//         </form>
//         <Link className='linkTo' to="/login">Go back to Login</Link>
//         </Container>
//     );
//     }
// }

//    export default CreateAccount; 



