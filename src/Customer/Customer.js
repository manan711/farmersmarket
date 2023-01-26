import React from "react";
import CustomerHeader from './CustomerHeader';
import CustomerMenu from './CustomerMenu';
import CustomerListOfProduts from "./CustomerListOfProduts";


function Customer () {
    return(
        <>
            <CustomerHeader/>
            <CustomerMenu/>
            <CustomerListOfProduts/>
        </>
        
    );
}

export default Customer;