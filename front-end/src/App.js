import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
// import Navbar from './Components/Navbar';
import CreateAccount from './Components/CreateAccount';
import Home from './Components/Home';
import MyAccount from './Components/MyAccount'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route path="/createAccount" element={<CreateAccount />} /> 
      <Route path="/myAccount" element={<MyAccount />} /> 
    </Routes>
  </BrowserRouter>
    // <Router>
    //   {/* <Navbar/> */}
    //     <Route path="/" element={<Login/>} />
    //     {/* <Route path="/home" element={<Home />} /> */}
    //     {/* <Route path="/createAccount" element={<CreateAccount />} /> */}
    // </Router>
  );
}

export default App;