// import React from "react";
import "./Card.css";

function Card({
  imgUrl,
  cardText,
  boldText,
  imgWidth,
  imgHeight,
  bckgColor,
  biggerText,
}) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: bckgColor,
        fontSize: biggerText ? "larger" : "normal",
      }}
    >
      <img src={imgUrl} width={imgWidth} height={imgHeight}></img>
      <h4 style={{ fontWeight: boldText ? "bold" : "normal" }}>{cardText}</h4>
    </div>
  );
}

export default Card;
