// import React from "react";
import "./AboutText.css";

function AboutText(props) {
  return (
    <div>
      <p>{props.line1}</p>
      <p>{props.line2}</p>
    </div>
  );
}

export default AboutText;
