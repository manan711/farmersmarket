import React, {useState, useContext} from 'react';
import { Container } from "./AddProductStyle";
import { AppContext } from './AppProvider'
// import '../Styles/addProduct.css';

const AddProduct = () =>   {

    const { url} = useContext(AppContext);

    const farmerID = sessionStorage.getItem("accountID");
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productImageURL, setSelectedFile] = useState(null);
    const [message, setMessage] = useState("");

    const options = [
        { value: 'fruitType', label: 'Fruit' },
        { value: 'vegetableType', label: 'Vegetables' }
      ];

    const handleClearForm = () => {
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setProductQuantity('');
        setProductCategory('');
        setSelectedFile(null);
    }

    const handleChange = (event) => {
        setProductCategory(event.target.value);
      }

   const handleSubmit = async event => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("farmerID", farmerID);
        formData.append("productName", productName);
        formData.append("productDescription", productDescription);
        formData.append("productPrice", productPrice);
        formData.append("productQuantity", productQuantity);
        formData.append("productCategory", productCategory);
        formData.append("productImageURL", productImageURL);
        
        // fetch('http://localhost:5000/www/addProduct.php', {
        try{
            await fetch(url + 'addProduct.php', {
            // await fetch('http://localhost:5000/www/addProduct.php', {
                method: 'POST',
                body: formData
            })
            
            setMessage("Product Registed");

            alert('Product created successfully !!');

            handleClearForm();

        }catch(e){
            console.error(e);
            alert('Error when register the product !!');
        }
    
     
    }; 

    return (
        <Container>
        <h1>Register a new product</h1>
        <form  className="formAddProduct" onSubmit={handleSubmit} >
            
            <label className = "labelAddProduct" htmlFor="productName">Name: </label> 
            <input className = "inputAddProduct" type="text" name="productName" placeholder="Product Name" value= {productName} onChange={(e) => setProductName(e.target.value)} required/>
            <br/>
            <label className = "labelAddProduct" htmlFor="productDescription">Description: </label> 
            <input className = "inputAddProduct" type="text" name="productDescription" placeholder="Product Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required/>
            <br/>
            <label className = "labelAddProduct" htmlFor="productPrice">Price: </label> 
            <input className = "inputAddProduct" type="text" name="productPrice" placeholder="Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required/>
            <br/>
            <label className = "labelAddProduct" htmlFor="productQuantity">Quantity: </label> 
            <input className = "inputAddProduct" type="text" name="productQuantity" placeholder="Product Quantity" value= {productQuantity} onChange={(e) => setProductQuantity(e.target.value)} required/>
            <br/>
            <label className = "labelAddProduct" htmlFor="productCategory">Category </label> 
            <select value={productCategory} onChange={handleChange}>
                <option value="">Category</option>
                {options.map((option) => (
                    <option key={option.value} value={option.label}>{option.label}</option>
                ))}
            </select>
            {/* <input className = "inputAddProduct" type="text" name="productCategory" placeholder="Product Category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required/> */}
            <br/>
            <label className = "labelAddProduct" htmlFor="productImageURL">Upload the product image: </label> 
            <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])}/>

            <button type="submit">Register product</button>
            <p>{message}</p>
        </form>
        </Container>
    );
}

   export default AddProduct; 
