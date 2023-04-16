<?php

include 'connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $data = json_decode(file_get_contents("php://input"));
   
        $UserId = $data->UserId;
       
        $Tax = $data->Tax;
        $SubTotal = $data->SubTotal;
        $TotalPrice = $data->TotalPrice;
        $OrderItem = $data->CartItem;

        $timestamp = strtotime($data->OrderDate);
        $OrderDate = date('Y-m-d H:i:s', $timestamp);

        $query = "INSERT INTO `orders`(`UserId`, `OrderDate`,`Tax`, `SubTotal`, `TotalPrice`)
        VALUES ('$UserId','$OrderDate','$Tax','$SubTotal','$TotalPrice')";
        $stmt = $conn->prepare($query);
        


        $order = new stdClass();
        if($stmt->execute()){
            $last_id = $stmt->insert_id;
            foreach($OrderItem as $key => $value){
                $cmd = "INSERT INTO `orderItem`(`OrderId`, `ItemName`,`ItemQuantity`, `ItemPrice`)
                VALUES ('$last_id','$value->ProductName','$value->qtyItem','$value->ProductPrice')";
                $sql = $conn->prepare($cmd);
                $sql->execute();

            }
            $order->OrderId = $last_id;
            $myJSON = json_encode($order);
            echo $myJSON;  
        }else{
  
            $myJSON = json_encode("not created");
            echo $myJSON;  
        }
  

       


     
}

