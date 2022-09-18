import React from "react";
import "./App.css";
import photo from "./photo.jpg";

export default function Head() {
  return (
    <div className="row">
      <div className="col-3">
        <img src={photo} alt="Valentyna" />
      </div>
      <div className="col-9">
        <p>👋 Hello, I am</p>
        <h1>Valentyna Baranova</h1>
        <h2>Frontent developer based in Ukraine</h2>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
