<?php
include 'connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents("php://input"));

    $OrderId = $data->OrderId;
    $query = "SELECT * FROM orders WHERE OrderId = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $OrderId);
    $stmt->execute();
    $result = $stmt->get_result(); 
    $row = $result->fetch_assoc(); 
  
    $order = new stdClass();
    

    if ($row) {  

        $order->OrderId = $row['OrderId'];
        $order->OrderDate = $row['OrderDate'];
        $order->Tax = $row['Tax'];
        $order->SubTotal = $row['SubTotal'];
        $order->TotalPrice = $row['TotalPrice'];


        $query = "SELECT * FROM orderItem WHERE OrderId = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $order->OrderId);
        $stmt->execute();
        $result = $stmt->get_result(); 

        $order->OrderItem = array();
        while($row = mysqli_fetch_array($result)){
            array_push($order->OrderItem,$row);
        }

        $myJSON = json_encode($order);
        echo $myJSON;
    } else {
        $order->message = "Invalid product";
        $myJSON = json_encode($order);
        echo $myJSON;
    }
    
  
  }
?> 