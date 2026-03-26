import React, { useState } from "react";
import ResumePreview from "./ResumePreview";

function Form() {
  const [data, setData] = useState({
    name: "",
    summary: "",
    education: "",
    skills: "",
    experience: "",
    achievements: "",
    image: ""
  });

  const handleChange = (e) => {
  const { name, value } = e.target;

  let updatedData = { ...data, [name]: value };

  // Auto-generate summary when skills change
  if (name === "skills") {
    updatedData.summary = generateSummary(value);
  }

  setData(updatedData);
};
const generateSummary = (skills) => {
  if (!skills) return "";

  const skillList = skills.split(",").map(s => s.trim());

  return `Results-driven professional with expertise in ${skillList.join(", ")}. Proven ability to apply technical and problem-solving skills in real-world applications. Strong team player with a focus on delivering efficient and scalable solutions.`;
};
const handleImage = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setData({ ...data, image: reader.result });
  };

  reader.readAsDataURL(file);
};
  return (
    <div className="main">
      <div className="form">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <textarea
          name="summary"
          placeholder="Career Objective"
          onChange={handleChange}
        />

        <textarea
          name="education"
          placeholder="Education"
          onChange={handleChange}
        />

        <textarea
          name="skills"
          placeholder="Skills"
          onChange={handleChange}
        />

        <textarea
          name="experience"
          placeholder="Experience & Internships"
          onChange={handleChange}
        />

        <textarea
          name="achievements"
          placeholder="Achievements"
          onChange={handleChange}
        />

        <input type="file" onChange={handleImage} />
      </div>

      <ResumePreview data={data} />
    </div>
  );
}

export default Form;