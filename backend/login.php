<?php
include 'connection.php';


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');



if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $data = json_decode(file_get_contents("php://input"));
    
  $email = $data->Email;
  $password = $data->Password; 

  // $hash = password_hash($password, PASSWORD_DEFAULT);
  $query = "SELECT * FROM users WHERE Email = ? AND Password = ?";
  
  $stmt = $conn->prepare($query);
  $stmt->bind_param("ss", $email, $password);
  $stmt->execute();
  $result = $stmt->get_result(); 
  $row = $result->fetch_assoc(); 
  
  $user = new stdClass();
  if ($row) {   
      $user->UserId = $row['UserId'];
      $user->FirstName = $row['FirstName'];
      $user->Email = $row['Email'];
      $user->Password = $row['Password'];
      $user->TypeAccount = $row['TypeAccount'];
      $user->message = "Login successful";
      $user->status = true;
      if($user->TypeAccount == "Customer"){
        
        $query = "SELECT CustomerID FROM customer WHERE UserId = ?";
        
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $user->UserId);
        $stmt->execute();
        $result = $stmt->get_result(); 
        $row = $result->fetch_assoc(); 
        $user->accountID = $row['CustomerID'];
      }else if($user->TypeAccount == "Farmer"){
        $query = "SELECT FarmerID FROM farmer WHERE UserId = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $user->UserId);
        $stmt->execute();
        $result = $stmt->get_result(); 
        $row = $result->fetch_assoc(); 
        $user->accountID = $row['FarmerID'];
      }
   
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