import React, {useState, useEffect, useContext} from 'react';
import { Container } from './MyProductStyle';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppProvider';

const MyProduct = () =>   {

    const { url} = useContext(AppContext);

    const accountID  = sessionStorage.getItem("accountID");

    const navigate = useNavigate();
    

    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        if(!sessionStorage.getItem("id")){
            navigate('/');
        }
        fetch(url + 'getListOfProductByFarmer.php', {
        // fetch('http://localhost/backend/getListOfProductByFarmer.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FarmerID: accountID
            }) 
        })
        .then( (response) => {
            return response.json()
        }).then( (data) => {
            setProductList(data);
        });
        
    },[accountID, url, navigate]);

    const handleDelete  = async (product, key) =>{
        await fetch(url + 'deleteProduct.php', {
        // await fetch('http://localhost/backend/deleteProduct.php', {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ProductID: product.ProductID
            }) 
        });

        alert('Deleted product.');
        productList.splice(key,1);
        setProductList([...productList]);
    } 

    const handleEdit  =  (product, key) =>{
        navigate('/editProduct',{state:{product}});
        // <Navigate to="/editProduct" state={product}/>;
    } 

    return (
        <Container>
            <h1>My Products</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th></th>
                </tr>
                {productList.map((product, key) => {
                    return (
                        <tr key={product.ProductID}>
                        <td>{product.ProductName}</td>
                        <td>{product.ProductDescription}</td>
                        <td>{product.ProductPrice}</td>
                        <td>{product.ProductQuantity}</td>
                        <td>{product.ProductCategory}</td>
                        <td><button onClick={() => handleEdit(product, key)}  id='btnEdit'>Edit</button> <button onClick={() => handleDelete(product, key)} id='btnDelete'>Delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </Container>
        
    );
}

   export default MyProduct; 


