import React from "react";
import "./App.css";

export default function LeftSide() {
  return (
    <div className="col-md-4 main_block">
      <div className="title">SKILLS</div>
      <div className="skills">
        <p>
          <strong>Hard Skills:</strong>
        </p>
        <ul>
          <li>Front-End Development</li>
          <li>React Native</li>
          <li>HTML5</li>
          <li>Cascading Style Sheets (CSS)</li>
          <li>Responsive Web Design</li>
          <li>Landing Pages</li>
          <li> SQL</li>
          <li>Bootstrap</li>
          <li>GitHub Web Services API</li>
        </ul>
        <p>
          <strong>Soft Skills:</strong>
        </p>
        <ul>
          <li>Adapted, flexible</li>
          <li>Dependable</li>
          <li>Determined</li>
          <li>Motivated</li>
          <li>Reliable</li>
          <li>Problem-solver</li>
        </ul>
      </div>
      <div className="title">PERSONAL INTERESTS</div>
      <p>I like traveling, cats 😻 and dark chocolate 🍫 </p>
    </div>
  );
}
