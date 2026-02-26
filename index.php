<!DOCTYPE html>
<html>
<head>
    <title>Student Registration</title>
</head>
<body>

<h2>Student Registration System</h2>

<form method="POST" action="insert.php">
    First Name: <input type="text" name="fname" required><br><br>
    Last Name: <input type="text" name="lname" required><br><br>
    Roll No: <input type="text" name="rollno" required><br><br>
    Password: <input type="password" name="password" required><br><br>
    Confirm Password: <input type="password" name="cpassword" required><br><br>
    Contact: <input type="text" name="contact" pattern="[0-9]{10}" required><br><br>
    <input type="submit" value="Register">
</form>

<br>

<h3>Other Operations</h3>

<form method="POST" action="delete.php">
    Enter Roll No to Delete:
    <input type="text" name="rollno" required>
    <input type="submit" value="Delete">
</form>

<br>

<form method="POST" action="update.php">
    Enter Roll No to Update:
    <input type="text" name="rollno" required><br><br>
    New Contact:
    <input type="text" name="contact" pattern="[0-9]{10}" required>
    <input type="submit" value="Update">
</form>

<br>

<a href="view.php">View All Students</a>

</body>
</html>