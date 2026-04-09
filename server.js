const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => {
  console.log("❌ MongoDB Error:");
  console.log(err);
});

// Schema
const studentSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  roll: Number,
  password: String,
  contact: String
});

const Student = mongoose.model("Student", studentSchema);


// CREATE
app.post("/add", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send("Student Added");
});

// READ
app.get("/students", async (req, res) => {
  const data = await Student.find();
  res.json(data);
});

// UPDATE
app.put("/update/:roll", async (req, res) => {
  await Student.findOneAndUpdate(
    { roll: req.params.roll },
    req.body
  );
  res.send("Updated");
});

// DELETE
app.delete("/delete/:roll", async (req, res) => {
  await Student.findOneAndDelete({ roll: req.params.roll });
  res.send("Deleted");
});

app.listen(5000, () => console.log("Server running on port 5000"));