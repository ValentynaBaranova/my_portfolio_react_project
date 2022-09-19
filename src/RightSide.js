import React from "react";
import "./App.css";

export default function RightSide() {
  return (
    <div className="col-md-7 right_part">
      <div className="title">PROFILE</div>
      <p>
        Hello! My name is Valentina. I live in Ukraine. I recently graduated
        from Frontend studies with the study of React. Delighted with React. I
        wrote several applications on it. I continue to work on my projects and
        look for new on Freelance. I am improving my English. Now I have an
        Intermediate level. I'm not afraid to speak English. I consider myself
        purposeful. I learn easily. I'm a crazy perfectionist and I hate being
        late for work and I work diligently. I will be useful in any company
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
      <div className="title">WORK EXPERIENCE</div>
      <a
        href="https://kaleidoscopic-hamster-ec0d94.netlify.app/"
        target="_blank"
        title="Click if you want see Weather Project"
        rel="noreferrer"
      >
        React Weather Project 👆
      </a>
      <br />
      <a
        href="https://grand-tarsier-f22d60.netlify.app/"
        target="_blank"
        title="Click if you want see Dictionary Project"
        rel="noreferrer"
      >
        React Dictionary Project 👆
      </a>
      <br />
      <p>These are my last 2 real projects using popular APIs.</p>
    </div>
  );
}
