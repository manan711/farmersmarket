<?php
include 'connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents("php://input"));
  $UserId = $data->UserId;

  $query = "SELECT * FROM users WHERE UserId = ?";
  $stmt = $conn->prepare($query);
  $stmt->bind_param("i", $UserId);
  $stmt->execute();
  $result = $stmt->get_result(); 
  $row = $result->fetch_assoc(); 
  
  $user = new stdClass();

  if ($row) {        
    
      $user->FirstName = $row['FirstName'];
      $user->LastName = $row['LastName'];
      $user->Email = $row['Email'];
      $user->Password = $row['Password'];
      $user->TypeAccount = $row['TypeAccount'];
      
      if($user->TypeAccount == "Customer"){
        $query = "SELECT * FROM customer WHERE UserId = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $UserId);
        $stmt->execute();
        $result = $stmt->get_result(); 
        $row = $result->fetch_assoc(); 
        $user->CustomerID = $row['CustomerID'];
        $user->Address = $row['Address'];
        $user->City = $row['City'];
        $user->Province = $row['Province'];
        $user->PhoneNumber = $row['PhoneNumber'];
      }else if($user->TypeAccount == "Farmer"){
        $query = "SELECT * FROM farmer WHERE UserId = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $UserId);
        $stmt->execute();
        $result = $stmt->get_result(); 
        $row = $result->fetch_assoc(); 
        $user->FarmerID = $row['FarmerID'];
        $user->Address = $row['Address'];
        $user->City = $row['City'];
        $user->Province = $row['Province'];
        $user->PhoneNumber = $row['PhoneNumber'];
      }
      $myJSON = json_encode($user);
      echo $myJSON;
  } else {
      $user->message = "Invalid user";
      $myJSON = json_encode($user);
      echo $myJSON;
  }

}
?> 