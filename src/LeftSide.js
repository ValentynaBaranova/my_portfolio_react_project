import React from "react";
import "./App.css";

export default function RightSide() {
  return (
    <div className="col-md-7 right_part">
      <div className="title">PROFILE</div>
      <p>
        Hello! My name is Valentina. I live in Ukraine. I recently graduated
        from Front-end studies with the study of React. Delighted with React. I
        wrote several applications on it. I continue to work on my projects and
        look for new on Freelance. Looking for a job trainee or junior Front-end
        Developer (React). I am improving my English. Now I have an Intermediate
        level. I consider myself purposeful. I learn easily. I'm a crazy
        perfectionist.. Able to effectively self-manage during independent
        projects, as well as collaborate in a team setting. I will be useful in
        any company.
      </p>
      <div className="title">PREVIOUS EDUCATION</div>
      <p>
        Successfully graduated from{" "}
        <a
          href="https://www.shecodes.io/graduates/48282-valentyna-baranova"
          target="_blank"
          title="Click if you want more"
          rel="noreferrer"
        >
          SheCodes Foundation
        </a>
      </p>
      <ul>
        <li>SheCodes Basics</li>
        <li>SheCodes Plus (Frontend)</li>
        <li> SheCodes Responsive</li>
        <li>SheCodes React</li>
      </ul>
      <p>
        I continue to study English at{" "}
        <a
          href="https://study-less.school/"
          target="_blank"
          title="Click if you want more"
          rel="noreferrer"
        >
          Study Less School
        </a>
      </p>
      <ul>
        <li>B1 Intermediate</li>
      </ul>
      <div className="title">WORK EXPERIENCE</div>
      <p>These are my last 2 real projects using popular APIs:</p>
      <div className="project">
        <a
          href="https://kaleidoscopic-hamster-ec0d94.netlify.app/"
          target="_blank"
          title="Click if you want see Weather Project"
          rel="noreferrer"
        >
          See my project React Weather Project 👆
        </a>
        <br />
        <a
          href="https://grand-tarsier-f22d60.netlify.app/"
          target="_blank"
          title="Click if you want see Dictionary Project"
          rel="noreferrer"
        >
          See my project React Dictionary Project 👆
        </a>
      </div>
    </div>
  );
}
