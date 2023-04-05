<?php
include 'connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $data = json_decode(file_get_contents("php://input"));
  $user_id = $data->user_id;
  $query = "SELECT * FROM users WHERE user_id = ?";
  $stmt = $conn->prepare($query);
  $stmt->bind_param("i", $user_id);
  $stmt->execute();
  $result = $stmt->get_result(); 
  $row = $result->fetch_assoc(); 
  
  $user = new stdClass();

  if ($row) {   
      
      $user->user_id = $row['user_id'];
      $user->email = $row['email'];
      $user->password = $row['password'];
      $user->firstName = $row['firstName'];
      $user->message = "Login successful";
      
      $myJSON = json_encode($user);

      echo $myJSON;
  } else {
      $user->message = "Invalid user";
      $myJSON = json_encode($user);
      echo $myJSON;
  }


}
?> 