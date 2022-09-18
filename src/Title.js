import React from "react";
import Photo from "./Photo";
import "./App.css";

export default function Title() {
  let blocks = [
    "PROFILE",
    "MY CONTACTS",
    "PERSONAL INTERESTS",
    "SKILLS, DEVELOPMENT TOOLS",
    "PREVIOUS EDUCATION",
    "WORK EXPERIENCE",
  ];
  return (
    <div>
      <Photo />
      {blocks.map(function (block, index) {
        if (index < 3) {
          return (
            <div key={index === 3} className="title left_col">
              {block}
            </div>
          );
        } else {
          return (
            <div key={index > 3} className="title right_col">
              {block}
            </div>
          );
        }
      })}
    </div>
  );
}
