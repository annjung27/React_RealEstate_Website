import React from "react";
import { Link } from "react-router-dom";

function Property() {
  return (
    <div>
      <div
        style={{ textAlign: "right", marginTop: "20px", marginRight: "30px" }}
      >
        <Link to="/">
          <i className="fa-solid fa-x" style={{ fontSize: "20px" }} />
        </Link>
      </div>
      <h1>Property Detail</h1>
    </div>
  );
}

export default Property;
