import React, {useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import { Container } from './ProductFeedStyle';
import { AppContext } from './AppProvider'
// import '../Styles/productFeed.css';

const ProductsFeed = () =>   {

    // const location = useLocation();
    // const { categoryType } = location.state
    // const { categoryType } = location.state //|| {categoryType: "All"};

    const { categoryType, url } = useContext(AppContext);
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
        fetch(url + 'listOfProduct.php', requestBody)
        // fetch('http://localhost/backend/listOfProduct.php', requestBody)
            .then( (response) => {
                return response.json()
            }).then( (data) => {
                console.log(data);
                setProductList(data);
            });
        
        
        
    },[categoryType, url]);

    return (
        <Container>
            <ul className='productList'>
                {productList.map(product => (<ProductCard className="productItem" key={product.ProductID} productItem = {product} 
                />))}
            </ul>
        </Container>
        
    );
}

   export default ProductsFeed; 
