<?php
$servername = "localhost";
$username = "root";
$password = "_Mysqllocalsecured1.";
$dbname = "serl";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$name=$_GET['name'];
$designation=$_GET['designation'];
$mentor=$_GET['mentor'];
$phone=$_GET['phone'];
$email=$_GET['email'];
$image=$_GET['image'];
$info=$_GET['info'];

$sql = "INSERT INTO (`name`,`designation`, `mentor`, `image`, `info`, `phone`, `email`) researcher VALUES ('$name','$designation', '$mentor', '$image', '$info', '$phone', '$email') ";
if($conn->query($sql)===TRUE){
    header("location:../researcher.html");
}
mysqli_close($conn);
?>
