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
$address=$_GET['address'];
$phone=$_GET['phone'];
$email=$_GET['email'];
$image=$_GET['image'];
$site=$_GET['site'];

$sql = "INSERT INTO profiles (`name`,`designation`, `address`, `phone`, `email`, `image`, `site`) VALUES ('$name','$designation', '$address', '$phone', '$email', '$image', '$site') ";
if($conn->query($sql)===TRUE){
    header("location:../faculty.html");
}
mysqli_close($conn);
?>
