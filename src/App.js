import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom';

import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;