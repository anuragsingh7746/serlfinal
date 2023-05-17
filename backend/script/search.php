<?php
$servername = "localhost";
$username = "ansh";
$password = "Ansh@4321#@#";
$dbname = "serl";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get the name and ID parameters from the AJAX request
$name = $_POST['name'];
$id = $_POST['id'];

// Perform a database query to search for the name and ID in the user table
$sql = "SELECT * FROM user WHERE name='$name' AND id='$id'";
$result = mysqli_query($conn, $sql);

// Check if a matching record is found
if ($result && mysqli_num_rows($result) > 0) {
  echo "success";
} else {
  echo "fail";
}
?>
