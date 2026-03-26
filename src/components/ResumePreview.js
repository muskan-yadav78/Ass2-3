import React from "react";
import html2pdf from "html2pdf.js";

function ResumePreview({ data }) {
  const downloadPDF = () => {
    const element = document.getElementById("resume");
    html2pdf().from(element).save("ATS_Resume.pdf");
  };

  // Convert comma text → bullet list
  const formatList = (text) => {
    if (!text) return [];
    return text.split(",").map((item) => item.trim());
  };

  return (
    <div>
      <div id="resume" className="preview">
        
        <h2>{data.name}</h2>

        {data.image && (
          <img src={data.image} alt="profile" width="100" />
        )}

        <hr />

        <h3>Career Objective</h3>
        <p>{data.summary}</p>

        <h3>Education</h3>
        <ul>
          {formatList(data.education).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Skills</h3>
        <ul>
          {formatList(data.skills).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Experience & Internships</h3>
        <ul>
          {formatList(data.experience).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Achievements</h3>
        <ul>
          {formatList(data.achievements).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

      <button onClick={downloadPDF}>Download ATS Resume</button>
    </div>
  );
}

export default ResumePreview;