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
$year=$_GET['year'];
$topic=$_GET['topic'];


$sql = "INSERT INTO mtech_project VALUES ('$name','$year', '$topic') ";
if($conn->query($sql)===TRUE){
    header("location:../project.html");
}
mysqli_close($conn);
?>
