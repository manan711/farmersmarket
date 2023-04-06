import React, {useState} from 'react';
import '../Styles/addProduct.css';

const AddProduct = () =>   {

    const farmerID = sessionStorage.getItem("FarmerId")
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productImageURL, setSelectedFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleClearForm = () => {
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setProductQuantity('');
        setProductCategory('');
        setSelectedFile(null);
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
        
        // fetch('http://localhost:8080/api/users', {
        try{
            await fetch('http://localhost/backend/addProduct.php', {
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
        <div className='addProductPage'>
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
            <input className = "inputAddProduct" type="text" name="productCategory" placeholder="Product Category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required/>
            <br/>
            <label className = "labelAddProduct" htmlFor="productImageURL">Upload the product image: </label> 
            <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])}/>

            <button type="submit">Creat account</button>
            <p>{message}</p>
        </form>
        </div>
    );
}

   export default AddProduct; 
