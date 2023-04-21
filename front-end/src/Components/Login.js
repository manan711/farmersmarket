
import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import logoMarket from "../Images/Logo_MarketPlace.png"
import { Container } from "./LoginStyle";
import { AppContext } from './AppProvider';
// import '../Styles/login.css';

const Login  = () => {
    const { url, path} = useContext(AppContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setmMssage] = useState('');


    const handleSubmit = event => {
        event.preventDefault();
        
        fetch(url + 'login.php', {
        // fetch('http://localhost/backend/login.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: email,
                Password: password
            }) 
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if(data.status){
                sessionStorage.setItem("id", data.UserId);
                sessionStorage.setItem("name", data.FirstName);
                sessionStorage.setItem("typeOfAccount", data.TypeAccount);
                sessionStorage.setItem("accountID", data.accountID);
                setmMssage(data.message);
                window.location.replace(path);
                // navigate('/');
            }else{
                setmMssage('Invalid user');
            }
            
        });
    }; 


    return (
        <Container>
            <img src={logoMarket} className="farmLogin" alt="logo" />
            <form className="formLogin" onSubmit={handleSubmit}>
                <label htmlFor="email">Email </label> 
                <input className = "loginInput" type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <br/>
                <label htmlFor="password">Password </label> 
                <input className = "loginInput" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <br/>
                <button type="submit">Login</button>
                <p>{message}</p>
            </form>
            <Link className='linkTo' to="/createAccount">Create Account</Link>
            {/* <Link className='linkTo' to="/www/createAccount">Create Account</Link> */}

        </Container>
    );
}

   export default Login; 




//    class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             message: ''
//         }; 
    
//     }
//     handleChange = event => {
//         this.setState({ [event.target.name]: event.target.value });
//     };
//     handleSubmit = event => {
//         event.preventDefault();
//         var that = this;
        
//         fetch('http://localhost:5000/www/login.php', {
//         // fetch('http://localhost/backend/login.php', {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 Email: this.state.email,
//                 Password: this.state.password
//             }) 
//         })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             if(data.status){
//                 sessionStorage.setItem("id", data.UserId);
//                 sessionStorage.setItem("name", data.FirstName);
//                 sessionStorage.setItem("typeOfAccount", data.TypeAccount);
//                 sessionStorage.setItem("accountID", data.accountID);
//                that.setState({...that.state, message: data.message})
//                window.location.replace("/");
//             }else{
//                 that.setState({...that.state, message: 'Invalid user'})
//             }
            
//         });
//     }; 


// render() {
//     return (
//         <Container>
//             <img src={logoMarket} className="farmLogin" alt="logo" />
//             <form className="formLogin" onSubmit={this.handleSubmit}>
//                 <label htmlFor="email">Email </label> 
//                 <input className = "loginInput" type="text" name="email" placeholder="email" value={this.state.username} onChange={this.handleChange} required/>
//                 <br/>
//                 <label htmlFor="password">Password </label> 
//                 <input className = "loginInput" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}required/>
//                 <br/>
//                 <button type="submit">Login</button>
//                 <p>{this.state.message}</p>
//             </form>
//             <Link className='linkTo' to="/createAccount">Create Account</Link>
//             {/* <Link className='linkTo' to="/www/createAccount">Create Account</Link> */}

//         </Container>
//     );
//     }
// }

//    export default Login; 

