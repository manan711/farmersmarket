import React from "react";
import '../Styles/StyleCostumer.css';
import imgLine from '../Images/Line.svg';


function CustomerMenu () {
    return(
        <div>
             <ul>
                <li><a> Fruit &#38; Vegetables </a></li>
                <li><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                <li><a>Dairy &#38; Eggs</a></li>
                <li><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                <li><a>Pantry</a></li>
                <li><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                <li><a>Meat</a></li>
                <li><img src={imgLine} id="Img-Line" alt="Img-Line"/></li>
                <li><a>See all products</a></li>
             </ul>
        </div>
    );
}

export default CustomerMenu;