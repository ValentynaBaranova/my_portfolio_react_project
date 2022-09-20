import React from "react";
import "./App.css";
import photo from "./photo.jpg";

export default function Head() {
  return (
    <div className="head">
      <div className="row">
        <div className="col-3">
          <img src={photo} alt="Valentyna" className="img-fluid my_photo" />
        </div>
        <div className="col-9">
          <h4>👋 Hello, I am</h4>
          <h1>Valentyna Baranova</h1>
          <h2>Frontent developer based in Vinnytsya, Ukraine</h2>
        </div>
      </div>
    </div>
  );
}
