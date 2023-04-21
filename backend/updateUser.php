<?php
include 'connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    $UserId = $data->UserId;
    $FirstName = $data->FirstName;
    $LastName = $data->LastName;
    $Email = $data->Email;
    $Password = $data->Password;
    $TypeAccount = $data->TypeAccount;
    $Address = $data->Address;
    $City = $data->City;
    $Province = $data->Province;
    $PhoneNumber = $data->PhoneNumber;

    $query = "UPDATE users SET FirstName = ?, LastName = ?, Email = ?, Password = ?, TypeAccount = ?  WHERE UserId = ?";
    $stmt = $conn->prepare($query);
    
    $stmt->bind_param("sssssi", $FirstName, $LastName, $Email, $Password, $TypeAccount, $UserId);
    
    $user = new stdClass();
    if($stmt->execute()){

      
      if($TypeAccount == "Customer"){
        $query = "UPDATE customer SET Address = ?, City = ?, Province = ? , PhoneNumber = ? WHERE UserId = ?";
        
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssssi", $Address, $City, $Province, $PhoneNumber, $UserId);
        
        if($stmt->execute()){
            $user->status = true;
            $user->message = "User updated.";
            $myJSON = json_encode($user);
            echo $myJSON;
        }else {
            $user->status = false;
            $user->message = "Customer not updated.";
            $myJSON = json_encode($user);
            echo $myJSON;
        }
        
      }else if($TypeAccount == "Farmer"){
       
        $query = "UPDATE farmer SET Address = ?, City = ?, Province = ? , PhoneNumber = ? WHERE UserId = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssssi", $Address, $City, $Province, $PhoneNumber, $UserId);
        if($stmt->execute()){
            $user->status = true;
            $user->message = "User updated.";
            $myJSON = json_encode($user);
            echo $myJSON;
        }else {
            $user->status = false;
            $user->message = "Farmer not updated.";
            $myJSON = json_encode($user);
            echo $myJSON;
        }
      }
    }else {
        $user->status = false;
        $user->message = "User not updated.";
        $myJSON = json_encode($user);
        echo $myJSON;
    }   

}
?> 