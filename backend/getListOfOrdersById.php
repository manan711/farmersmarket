<?php
include 'connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents("php://input"));
    $UserId = $data->UserId;
    $query = "SELECT * FROM orders WHERE UserId = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $UserId);
    $stmt->execute();
    $result = $stmt->get_result(); 

  
   $orderList = array();
    while($row = mysqli_fetch_array($result)){
      array_push($orderList,$row);
    }
  
    echo json_encode($orderList);
  
  }
?> 