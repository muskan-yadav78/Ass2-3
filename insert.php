<?php
include 'db.php';

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$rollno = $_POST['rollno'];
$password = $_POST['password'];
$cpassword = $_POST['cpassword'];
$contact = $_POST['contact'];

if ($password != $cpassword) {
    die("Passwords do not match!");
}

$password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO students (rollno, firstname, lastname, password, contact)
        VALUES ('$rollno', '$fname', '$lname', '$password', '$contact')";

if (mysqli_query($conn, $sql)) {
    echo "Student Registered Successfully!";
} else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
?>