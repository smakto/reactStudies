// import React from "react";
import "./Main.css";
import Title from "./Title.jsx";
import AboutText from "./AboutText.jsx";
import CardsBox from "./CardsBox.jsx";

function Main() {
  return (
    <main>
      <div className="mainWrapper">
        <Title title="Portfolio" />
        <AboutText line1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <CardsBox />
      </div>
    </main>
  );
}

export default Main;
