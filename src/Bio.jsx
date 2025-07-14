import React from "react";
import "./Bio.css";

const Bio = ({ handleEmailClick }) => {
  return (
    <div className="bio-container">
      <h1 id="title">Francisco Eça</h1>
      <img
        src={process.env.PUBLIC_URL + "/assets/profile.png"}
        alt="Profile"
        className="profile-photo"
      />
      <p>
        I’m a React developer with a background that blends tech, operations,
        and creative problem-solving. I began my career managing support and
        admissions at a programming bootcamp—an experience that sharpened my
        communication skills and ignited my passion for coding. Since then, I’ve
        been building web applications using React and Redux, contributing to
        real-world projects in dynamic, fast-paced teams.
      </p>

      <p>
        Creativity plays a key role in how I approach problems—whether designing
        intuitive UI components, untangling complex logic, or writing music with
        my band. I bring curiosity, adaptability, and a strong drive to create
        solutions that truly work and make an impact.
      </p>

      <div className="buttons">
        <button
          id="gith"
          onClick={() => window.open("https://github.com/XixoEcaP", "_blank")}
        >
          GitHub
        </button>
        <button
          id="linkd"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/francisco-e%C3%A7a-8740b2209/",
              "_blank"
            )
          }
        >
          LinkedIn
        </button>
        <button onClick={handleEmailClick}>Message Me</button>
      </div>
      <h2>Contact</h2>
      <p>
        <strong>Phone:</strong> +351 91 44 33 135{" "}
      </p>
      <p>
        <strong>Email:</strong> franciscoecapinheiro@gmail.com
      </p>
    </div>
  );
};

export default Bio;
