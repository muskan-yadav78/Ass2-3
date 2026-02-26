<?php
include 'db.php';

$rollno = $_POST['rollno'];
$contact = $_POST['contact'];

$sql = "UPDATE students SET contact='$contact' WHERE rollno='$rollno'";

if (mysqli_query($conn, $sql)) {
    echo "Record Updated Successfully!";
} else {
    echo "Error updating record.";
}

mysqli_close($conn);
?>