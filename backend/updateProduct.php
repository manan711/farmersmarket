<?php
include 'connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    $ProductID = $_POST["ProductID"];
    $ProductName = $_POST["ProductName"];
    $ProductDescription = $_POST["ProductDescription"];
    $ProductPrice = $_POST["ProductPrice"];
    $ProductQuantity = $_POST["ProductQuantity"];
    $ProductImageURL = $_FILES["ProductImageURL"]["name"];
    $ProductCategory = $_POST["ProductCategory"];

    $query = "UPDATE products SET  ProductName = ?, ProductDescription = ?, ProductPrice = ?, ProductQuantity = ? , ProductImageURL = ?, ProductCategory = ?  WHERE ProductID = ?";
    $stmt = $conn->prepare($query);
    
    $stmt->bind_param("ssfissi", $ProductName, $ProductDescription, $ProductPrice, $ProductQuantity, $ProductImageURL, $ProductCategory,$ProductID);
    
    $product = new stdClass();

    if($stmt->execute()){

        $file = file_get_contents($_FILES["ProductImageURL"]["tmp_name"]);
        $root_folder = __DIR__.'/uploads/';
       
        if (!is_dir($root_folder)) {
            echo mkdir($root_folder, 0777, true);
        }
        
        file_put_contents($root_folder. $ProductImageURL, $file);


        $product->status = true;
        $product->message = "Product updated.";
        $myJSON = json_encode($product);
        echo $myJSON;
    }else {
        $product->status = false;
        $product->message = "Product not updated.";
        $myJSON = json_encode($product);
        echo $myJSON;
    }   

}
?> 