<?php

include 'connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $FarmerID = $_POST["farmerID"];
        $ProductName = $_POST["productName"];
        $ProductDescription = $_POST["productDescription"];
        $ProductPrice = $_POST["productPrice"];
        $ProductQuantity = $_POST["productQuantity"];
        $ProductImageURL = $_FILES["productImageURL"]["name"];
        $ProductCategory = $_POST["productCategory"];
        $query = "INSERT INTO `products`(`FarmerID`, `ProductName`, `ProductDescription`, `ProductPrice`, `ProductQuantity`, `ProductImageURL`, `ProductCategory`)
             VALUES ('$FarmerID','$ProductName','$ProductDescription','$ProductPrice','$ProductQuantity', '$ProductImageURL', '$ProductCategory' )";
        echo json_encode($query);
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $file = file_get_contents($_FILES["productImageURL"]["tmp_name"]);
        $root_folder = __DIR__.'/uploads/';
       
        if (!is_dir($root_folder)) {
            echo mkdir($root_folder, 0777, true);
        }
        
        file_put_contents($root_folder. $ProductImageURL, $file);


        // $query = "SELECT Email FROM users WHERE Email = ? ";
        // $stmt = $conn->prepare($query);
        // $stmt->bind_param("s", $Email);
        // $stmt->execute();
        // $result = $stmt->get_result(); 
        // $row = $result->fetch_assoc(); 

        // $user = new stdClass();

        // if($row){
        //     $user->message = "There is already an account registered with this email.";
        //     $myJSON = json_encode($user);
        //     echo $myJSON;
        // }else{
        //     $cmd = "INSERT INTO `users`(`FirstName`, `LastName`, `Email`, `Password`, `TypeAccount`)
        //      VALUES ('$data->FirstName','$data->LastName','$data->Email','$data->Password','$data->TypeAccount')";
        //     $sql = $conn->prepare($cmd);
        //     $sql->execute();
        //     $last_id = $sql->insert_id;
        //     if($TypeAccount == "Customer"){
        //         $cmd = "INSERT INTO `customer`(`Address`, `City`, `PhoneNumber`, `UserId`)
        //         VALUES ('$data->Address','$data->City','$data->PhoneNumber','$last_id')";
        //         $sql = $conn->prepare($cmd);
        //         $sql->execute();
        //     }else if($TypeAccount == "Farmer"){
        //         $cmd = "INSERT INTO `farmer`(`Address`, `City`, `PhoneNumber`, `UserId`)
        //         VALUES ('$data->Address','$data->City','$data->PhoneNumber','$last_id')";
        //         $sql = $conn->prepare($cmd);
        //         $sql->execute();
        //     }
        //     $user->message = "User created";
        //     $user->UserId = $last_id;
        //     $myJSON = json_encode($user);
        //     echo $myJSON;
        // }     

}
?> 