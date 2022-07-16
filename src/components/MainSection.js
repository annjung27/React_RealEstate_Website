import React from "react";
import { Button } from "./Button";
import "./MainSection.css";
import "../App.css";

function MainSection() {
  return (
    <div className="main-container" id="main">
      <video src="/videos/video_1.mp4" autoPlay loop muted></video>
      <p>Welcome to Alexander Realty</p>
      <h1>FIND YOUR DREAM HOME</h1>
      <div className="main-btns">
        <Button
          path="#agent"
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          ABOUT US
        </Button>
        <Button
          path="#properties"
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          VIEW HOMES
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
