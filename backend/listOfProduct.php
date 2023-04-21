<?php
include 'connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

  $query = "SELECT * FROM products ";
  $stmt = $conn->prepare($query);
  $stmt->execute();
  $result = $stmt->get_result(); 

 $productList = array();
  while($row = mysqli_fetch_array($result)){
    $row["ProductImageURL"] = 'http://localhost:5000/www/uploads/'. $row["ProductImageURL"];
    array_push($productList,$row);
  }

  echo json_encode($productList );
//   http://localhost/backend/uploads/
//   echo json_encode($result->fetch_assoc());
//   $user = new stdClass();
//   $myJSON = json_encode($user);
    // echo $myJSON;

} 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents("php://input"));
    $ProductCategory = $data->ProductCategory;
    $query = "SELECT * FROM products WHERE ProductCategory = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $ProductCategory);
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