import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Container } from './ProductFeedStyle';
// import '../Styles/productFeed.css';

const ProductsFeed = () =>   {

    const location = useLocation();
    const { categoryType } = location.state


    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        const requestBody = categoryType === "All" ? 
                {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json'
                    }
                } :
                {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ProductCategory: categoryType
                    }) 
                }

        fetch('http://localhost/backend/listOfProduct.php', requestBody)
            .then( (response) => {
                return response.json()
            }).then( (data) => {
                setProductList(data);
            });
        
        // if(categoryType === "All"){
        //     fetch('http://localhost/backend/listOfProduct.php', {
        //         method: 'GET',
        //         headers: {
        //         'Content-Type': 'application/json'
        //         }
        //     })
        //     .then( (response) => {
        //         return response.json()
        //     }).then( (data) => {
        //         setProductList(data);
        //     });
        // }else{
        //     fetch('http://localhost/backend/listOfProduct.php', {
        //         method: 'POST',
        //         headers: {
        //         'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             ProductCategory: categoryType
        //         }) 
        //     })
        //     .then( (response) => {
        //         return response.json()
        //     }).then( (data) => {
        //         setProductList(data);
        //     });
        // }
       
        
    },[categoryType]);

    return (
        <Container>
            <ul className='productList'>
                {productList.map(product => (<ProductCard className="productItem" key={product.ProductID} productName= {product.ProductName} 
                productImage={product.ProductImageURL} productPrice={product.ProductPrice}/>))}
            </ul>
        </Container>
        
    );
}

   export default ProductsFeed; 
