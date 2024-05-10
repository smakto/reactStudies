// import React from "react";
import "./Hero.css";

function Hero({ title, subtitle, color }) {
  return (
    <div
      className={
        color === "blue" ? "blueBckg" : color === "red" ? "redBckg" : ""
      }
    >
      {title === false ? <></> : <h1>{title}</h1>}
      {subtitle === false ? <></> : <h2>{subtitle}</h2>}
    </div>
  );
}

export default Hero;
