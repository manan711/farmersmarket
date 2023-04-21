import React, {useState, useEffect, useContext} from 'react';
import { Container } from "./EditProductStyle";
import { useLocation,useNavigate } from 'react-router-dom';
import { AppContext } from './AppProvider';

// import '../Styles/addProduct.css';

const EditProduct = () =>   {

    const { url} = useContext(AppContext);

    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state?.product;

    const [productID, setProductID] = useState(product.ProductID);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productImageURL, setSelectedFile] = useState(null);
    const [productFullImageURL, setProductFullImageURL] = useState(null);
    const [message, setMessage] = useState("");

    const options = [
        { value: 'Fruit', label: 'Fruit' },
        { value: 'Vegetables', label: 'Vegetables' }
      ];

      const handleChange = (event) => {
        setProductCategory(event.target.value);
      }


    useEffect(()=>{
        if(!sessionStorage.getItem("id") || sessionStorage.getItem("typeOfAccount") !== "Farmer"){
            navigate('/');
        }

        
        fetch(url + 'getProductById.php', {
        // fetch('http://localhost/backend/getProductById.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ProductID: productID
            }) 
        })
        .then( (response) => {
            return response.json()
        }).then( (data) => {
            setProductName(data.ProductName);
            setProductDescription(data.ProductDescription);
            setProductPrice(data.ProductPrice);
            setProductQuantity(data.ProductQuantity);
            setProductCategory(data.ProductCategory);
            setSelectedFile(data.ProductImageURL);
            setProductFullImageURL(data.ProductFullImageURL);
        });
        
    },[url, productID]);

    const handleClearForm = () => {
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setProductQuantity('');
        setProductCategory('');
        setSelectedFile(null);
    }

   const handleSubmit = async event => {

        //console.log(productImageURL);

        event.preventDefault();
        const formData = new FormData();
        formData.append("ProductID", productID);
        formData.append("ProductName", productName);
        formData.append("ProductDescription", productDescription);
        formData.append("ProductPrice", productPrice);
        formData.append("ProductQuantity", productQuantity);
        formData.append("ProductCategory", productCategory);
        formData.append("ProductImageURL", productImageURL);

        try{
            const response = await fetch(url + 'updateProduct.php', {
            // await fetch('http://localhost/backend/updateProduct.php', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            console.log(data);
            if(data.status){
                setMessage(data.message);
                alert(data.message);
            }else{
                setMessage(data.message);
            }
        }catch(e){
           console.error(e);
            alert('Error when register the product !!');
        }
    
     
    }; 

    return (
        <Container>
        <h1>Edit product</h1>
        <form  className="formAddProduct" onSubmit={handleSubmit} >
            <div id='outProductCard'>
                <div id='leftProductCard'>
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
                    <option value={options[productCategory]}></option>
                    {options.map((option) => (
                        <option key={option.value} value={option.label}>{option.label}</option>
                    ))}
                </select>
                {/* <input className = "inputAddProduct" type="text" name="productCategory" placeholder="Product Category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required/> */}
                <br/>
                </div>
                <div id='rightProductCard'>
                    <img src={productFullImageURL} className="ImgItem" alt="ImgItem"/>
                </div>
            </div>
            <label className = "labelAddProduct" htmlFor="productImageURL">Upload the product image: </label> 
            <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])}/>

            <button type="submit">Update product</button>
            <p>{message}</p>
        </form>
        </Container>
    );
}

   export default EditProduct; 
