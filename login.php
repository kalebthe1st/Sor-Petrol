<?php
$servername = "localhost";
$username = "cat";
$password = "";
$dbname = "appointment";
// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
 die("Connection failed: " . $conn->connect_error);
}
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
// SQL query to insert data into the database
$sql = "INSERT INTO login (name, email, password) VALUES 
('$name', '$email', '$password')";
if ($conn->query($sql) === TRUE) {
 echo "Data inserted successfully!";
} else {
 echo "Error: " . $sql . "<br>" . $conn->error;
}
// Close the connection
$conn->close();
?>