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
$mentor=$_GET['mentor'];
$link=$_GET['link'];
$title=$_GET['title'];
$content=$_GET['content'];


$sql = "INSERT INTO international (`name`,`mentor`, `link`, `title`, `content`) VALUES ('$name','$mentor', '$link', '$title', '$content') ";

if($conn->query($sql)===TRUE){
    header("location:../publication.html");
}
mysqli_close($conn);
?>
