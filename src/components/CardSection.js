import React from "react";
import "./CardSection.css";
import Card from "./Card";

function CardSection() {
  return (
    <div className="cards" id="cards">
      <h1>EXPLORE ALEXANDER REALTY</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <Card src="images/img_1.jpg" text="PROPERTIES" path="#properties" />
            <Card src="images/img_2.jpg" text="EXCLUSIVE SERVICE" />
            <Card src="images/img_3.jpg" text="NEWS" />
            <Card
              src="images/img_4.jpg"
              text="WORK WITH US"
              path="#newsletter"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
