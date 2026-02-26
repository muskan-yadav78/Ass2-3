<?php
include 'db.php';

$sql = "SELECT rollno, firstname, lastname, contact FROM students";
$result = mysqli_query($conn, $sql);

echo "<h2>Student Records</h2>";
echo "<table border='1'>
<tr>
<th>Roll No</th>
<th>First Name</th>
<th>Last Name</th>
<th>Contact</th>
</tr>";

while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>
    <td>".$row['rollno']."</td>
    <td>".$row['firstname']."</td>
    <td>".$row['lastname']."</td>
    <td>".$row['contact']."</td>
    </tr>";
}

echo "</table>";

mysqli_close($conn);
?>