<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "farm_marketplace";
$conn = new mysqli($host, $username, $password, $dbname);
// Check if the connection was successful

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
   } 
//  echo "Connected successfully";
// $servername = "localhost";
// $username = "root";
// $password = "";
// $database= "farm_marketplace";
 
// // Create connection
// $db = mysqli_connect($servername, $username, $password, $database);
 
// // Check connection
// if ($db->connect_error) {
//   die("Connection failed: " . $db->connect_error);
// }
// echo "Connected successfully";
?>
