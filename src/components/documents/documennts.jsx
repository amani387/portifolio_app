import React from "react";
import { FaDownload } from "react-icons/fa";
import "./Documents.css"; // Ensure you create this file for styling

const Documents = () => {
  // List of personal documents
  const docs = [
    {
      name: "Software Engineering Tempo",
      link: "https://drive.google.com/file/d/17Ieds5MdHExa72vmwQuOTLocO5SNYSeL/view?usp=sharing",
    },
    {
        name: "Recomendation letter",
        link: "https://drive.google.com/file/d/12eIhr7Jl6-tgTT4AslfKuksF4bzTG4lp/view?usp=sharing",
      },
    {
      name: "My Resume (CV)",
      link: "https://drive.google.com/file/d/1DKQPyWJRFki2a5fh8p10o1ILflyru3sb/view?usp=drive_link",
    },
    {
      name: "huawei certification",
      link: "https://drive.google.com/file/d/12eIhr7Jl6-tgTT4AslfKuksF4bzTG4lp/view?usp=sharing",
    },
  ];

  return (
    <section id="documents">
      <h2>📜 Personal Documents & Certificates</h2>
      <div className="container documents__container">
        <ul>
          {docs.map((doc, index) => (
            <li key={index} className="document__item">
              <FaDownload className="download__icon" />
              <a href={doc.link} target="_blank" rel="noopener noreferrer">
                {doc.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Documents;
