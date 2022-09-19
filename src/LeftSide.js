import React from "react";
import "./App.css";

export default function LeftSide() {
  let blocks = ["PROFILE", "MY CONTACTS", "PERSONAL INTERESTS"];
  return (
    <div className="col-md-5">
      {blocks.map(function (block, index) {
        return (
          <div key={index} className="title">
            {block}
          </div>
        );
      })}
    </div>
  );
}
