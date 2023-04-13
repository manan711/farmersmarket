<?php
include 'connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents("php://input"));

    $ProductID = $data->ProductID;
    $query = "SELECT * FROM products WHERE ProductID = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $ProductID);
    $stmt->execute();
    $result = $stmt->get_result(); 
    $row = $result->fetch_assoc(); 
  
    $product = new stdClass();
    

    if ($row) {  

        $product->ProductID = $row['ProductID'];
        $product->ProductName = $row['ProductName'];
        $product->ProductDescription = $row['ProductDescription'];
        $product->ProductPrice = $row['ProductPrice'];
        $product->ProductQuantity = $row['ProductQuantity'];
        $product->ProductImageURL = $row['ProductImageURL']; 
        $product->ProductFullImageURL = 'http://localhost/backend/uploads/'. $row["ProductImageURL"];
        $product->ProductCategory = $row['ProductCategory'];

        $myJSON = json_encode($product);
        echo $myJSON;
    } else {
        $product->message = "Invalid product";
        $myJSON = json_encode($product);
        echo $myJSON;
    }
    
  
  }
?> 