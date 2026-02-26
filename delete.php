<?php
include 'db.php';

$rollno = $_POST['rollno'];

$sql = "DELETE FROM students WHERE rollno='$rollno'";

if (mysqli_query($conn, $sql)) {
    echo "Record Deleted Successfully!";
} else {
    echo "Error deleting record.";
}

mysqli_close($conn);
?>