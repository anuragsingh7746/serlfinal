<?php
$servername = "localhost";
$username = "ansh";
$password = "Ansh@4321#@#";
$dbname = "serl";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT title, link FROM books";
$result = mysqli_query($conn, $sql);

$data = array();
while($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
}

mysqli_close($conn);

header('Content-Type: application/json');
echo json_encode($data);
?>
