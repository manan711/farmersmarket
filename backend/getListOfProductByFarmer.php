<?php
include 'connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents("php://input"));
    $FarmerID = $data->FarmerID;
    $query = "SELECT * FROM products WHERE FarmerID = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $FarmerID);
    $stmt->execute();
    $result = $stmt->get_result(); 

  
   $productList = array();
    while($row = mysqli_fetch_array($result)){
      $row["ProductImageURL"] = 'http://localhost:5000/www/uploads/'. $row["ProductImageURL"];
      array_push($productList,$row);
    }
  
    echo json_encode($productList );
  
  }
?> 