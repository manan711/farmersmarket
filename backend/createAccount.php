<?php

include 'connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $data = json_decode(file_get_contents("php://input"));
        $FirstName = $data->FirstName;
        $LastName = $data->LastName;
        $Email = $data->Email;
        $Password = $data->Password;
        $TypeAccount = $data->TypeAccount;
        $Address = $data->Address;
        $City = $data->City;
        $PhoneNumber = $data->PhoneNumber;
        

        $query = "SELECT Email FROM users WHERE Email = ? ";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("s", $Email);
        $stmt->execute();
        $result = $stmt->get_result(); 
        $row = $result->fetch_assoc(); 

        $user = new stdClass();

        if($row){
            $user->message = "There is already an account registered with this email.";
            $myJSON = json_encode($user);
            echo $myJSON;
        }else{
            $cmd = "INSERT INTO `users`(`FirstName`, `LastName`, `Email`, `Password`, `TypeAccount`)
             VALUES ('$data->FirstName','$data->LastName','$data->Email','$data->Password','$data->TypeAccount')";
            $sql = $conn->prepare($cmd);
            $sql->execute();
            $last_id = $sql->insert_id;
            if($TypeAccount == "Customer"){
                $cmd = "INSERT INTO `customer`(`Address`, `City`, `PhoneNumber`, `UserId`)
                VALUES ('$data->Address','$data->City','$data->PhoneNumber','$last_id')";
                $sql = $conn->prepare($cmd);
                $sql->execute();
            }else if($TypeAccount == "Farmer"){
                $cmd = "INSERT INTO `farmer`(`Address`, `City`, `PhoneNumber`, `UserId`)
                VALUES ('$data->Address','$data->City','$data->PhoneNumber','$last_id')";
                $sql = $conn->prepare($cmd);
                $sql->execute();
            }
            $user->message = "User created";
            $user->UserId = $last_id;
            $myJSON = json_encode($user);
            echo $myJSON;
        }     

}
// require 'connection.php';
// header("Access-Control-Allow-Origin: http://localhost:3000");
// header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
// header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
// $postdata = file_get_contents("php://input");
// if(isset($postdata) && !empty($postdata)){
//     $request = json_decode($postdata);
     
     
//     $name = $request->name;
//     $email = $request->email;
//     $password = $request->password;
//     $hash = password_hash($password, PASSWORD_DEFAULT);
//     $sql = "INSERT INTO users (name,email,password) VALUES ('$name','$email','$hash')";
//     if(mysqli_query($db,$sql)){
//         http_response_code(201);
//     }
//     else{
//          http_response_code(422); 
//     }
         
// }
?> 