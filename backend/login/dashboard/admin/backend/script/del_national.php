<?php
$servername = "localhost";
$username = "root";
$password = "_Mysqllocalsecured1.";
$dbname = "serl";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
$id = $_GET['id'];
$sql = "DELETE FROM national WHERE id='$id'";
$result = mysqli_query($conn, $sql);
if($result === 1){
  echo "success";
}

mysqli_close($conn);

?>
