import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
// import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
    // <Router>
    //   {/* <Navbar/> */}
    //     <Route path="/" element={<Login/>} />
    //     {/* <Route path="/home" element={<Home />} /> */}
    //     {/* <Route path="/register" element={<Register />} /> */}
    // </Router>
  );
}

export default App;