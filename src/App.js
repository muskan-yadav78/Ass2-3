import React, { useState, useEffect } from "react";

function App() {
  const [student, setStudent] = useState({
    fname: "",
    lname: "",
    roll: "",
    password: "",
    contact: ""
  });

  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // FETCH students
  const fetchStudents = async () => {
    const res = await fetch("http://localhost:5000/students");
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ADD student
  const addStudent = async () => {
    await fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    });
    fetchStudents();
  };

  // DELETE student
  const deleteStudent = async (roll) => {
    await fetch(`http://localhost:5000/delete/${roll}`, {
      method: "DELETE"
    });
    fetchStudents();
  };

  // SELECT for update
  const selectStudent = (s) => {
    setStudent(s);
    setEditMode(true);
  };

  // UPDATE student
  const updateStudent = async () => {
    await fetch(`http://localhost:5000/update/${student.roll}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    });

    setEditMode(false);
    setStudent({
      fname: "",
      lname: "",
      roll: "",
      password: "",
      contact: ""
    });

    fetchStudents();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎓 Student Management System</h2>

      {/* FORM */}
      <input name="fname" placeholder="First Name" value={student.fname} onChange={handleChange} />
      <input name="lname" placeholder="Last Name" value={student.lname} onChange={handleChange} />
      <input name="roll" placeholder="Roll No" value={student.roll} onChange={handleChange} />
      <input name="password" placeholder="Password" value={student.password} onChange={handleChange} />
      <input name="contact" placeholder="Contact" value={student.contact} onChange={handleChange} />

      <br /><br />

      {!editMode ? (
        <button onClick={addStudent}>➕ Add Student</button>
      ) : (
        <button onClick={updateStudent}>✏️ Update Student</button>
      )}

      <hr />

      {/* TABLE */}
      <h3>📋 Student Records</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.roll}>
              <td>{s.fname} {s.lname}</td>
              <td>{s.roll}</td>
              <td>{s.contact}</td>
              <td>
                <button onClick={() => selectStudent(s)}>Edit</button>
                <button onClick={() => deleteStudent(s.roll)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;