<?php
include 'connection.php';


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  

  $data = json_decode(file_get_contents("php://input"));
    
  $email = $data->email;
  $password = $data->password; 

  // $hash = password_hash($password, PASSWORD_DEFAULT);
  $query = "SELECT * FROM users WHERE email = ? AND password = ?";
  
  $stmt = $conn->prepare($query);
  $stmt->bind_param("ss", $email, $password);
  $stmt->execute();
  $result = $stmt->get_result(); 
  $row = $result->fetch_assoc(); 
  
  $user = new stdClass();
  if ($row) {   
      $user->user_id = $row['user_id'];
      $user->username = $row['name'];
      $user->email = $row['email'];
      $user->password = $row['password'];
      $user->message = "Login successful";
      $user->status = true;
   
      $myJSON = json_encode($user);
      echo $myJSON;
      
      
  } else {
     $user->status = false;
      $myJSON = json_encode($user);
      echo $myJSON;
  }

  // $postdata = file_get_contents("php://input");
// if(isset($postdata) && !empty($postdata)){
//     $request = json_decode($postdata);
    
    
//     $email = $request->email;
//     $password = $request->password;
//     $hash = password_hash($password, PASSWORD_DEFAULT);
//     $sql = "SELECT *from users where email = '$email' AND password = '$hash'";  
//     $result = mysqli_query($db, $sql);  
//     $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
//     $count = mysqli_num_rows($result);  

//     if(mysqli_query($db,$sql)){
//         http_response_code(201);
//     }
//     else{
//          http_response_code(422); 
//     }
         
// }

}
?> 