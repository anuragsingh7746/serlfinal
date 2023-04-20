<?php
$servername = "localhost";
$username = "root";
$password = "_Mysqllocalsecured1.";
$dbname = "serl";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$name=$_GET['title'];
$link=$_GET['link'];


$sql = "INSERT INTO books VALUES ('$title','$link') ";

if($conn->query($sql)===TRUE){
    header("location:../resource.html");
}
mysqli_close($conn);
?>
