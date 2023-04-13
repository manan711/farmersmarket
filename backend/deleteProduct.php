<?php
include 'connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");


if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    $data = json_decode(file_get_contents("php://input"));
    $ProductID = $data->ProductID;
    $query = "DELETE FROM products WHERE ProductID = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $ProductID);
    $stmt->execute();
  
  }
?>