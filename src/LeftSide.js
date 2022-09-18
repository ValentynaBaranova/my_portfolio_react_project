import React from "react";
import "./App.css";

export default function LeftSide() {
  let leftBlocks = [
    "SKILLS, DEVELOPMENT TOOLS",
    "PREVIOUS EDUCATION",
    "WORK EXPERIENCE",
  ];
  return (
    <div className="col">
      {leftBlocks.map(function (block, index) {
        return (
          <div key={index} className="title">
            {block}
          </div>
        );
      })}
    </div>
  );
}
