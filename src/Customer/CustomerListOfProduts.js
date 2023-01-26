import React from "react";
import ItemImage from '../Images/ItemImage.svg'
import '../Styles/StyleCostumer.css';



function CustomerListOfProduts () {
    return(
        <div id="ListOfProducts">
            <div className="blockItem">
                <img src={ItemImage} className="ImgItem" alt="ImgItem"/>
                <p className="ItemName">English Cucumber</p>
                <p className="ItemPrice">$ 0.0</p>
                <button className="btnItem">ADD</button>
            </div>
            <div className="blockItem">
                <img src={ItemImage} className="ImgItem" alt="ImgItem"/>
                <p className="ItemName">English Cucumber</p>
                <p className="ItemPrice">$ 0.0</p>
                <button className="btnItem">ADD</button>
            </div>
        </div>
    );
}

export default CustomerListOfProduts;