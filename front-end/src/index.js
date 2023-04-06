import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import Home from './Components/Home'
import reportWebVitals from './reportWebVitals';
//import Customer from './Customer/Customer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Home/>
  </React.StrictMode>
);

reportWebVitals();
