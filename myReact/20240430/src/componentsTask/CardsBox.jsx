// import React from "react";
import "./CardsBox.css";
import Card from "./Card.jsx";

let sunflowerImg =
  "https://images.unsplash.com/photo-1531759051464-c1e326cd6df1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmwlMjB3aXRoJTIwc3VuZmxvd2VyfGVufDB8fDB8fHww";
let bubblesImg =
  "https://fcmod.org/wp-content/uploads/2020/06/soap-bubbles-2417436_1920-e1593186009893.jpg";

const cardsInfo = [
  {
    bold: true,
    imgUrl: sunflowerImg,
    title: "Ipsum Feugiat",
    width: "100%",
    height: "200px",
    background: "#444",
    bigText: true,
  },
  {
    bold: true,
    imgUrl: bubblesImg,
    title: "Rhoncus Semper",
    width: "100%",
    height: "200px",
    background: "#5e5eee",
    bigText: false,
  },
  {
    bold: true,
    imgUrl: sunflowerImg,
    title: "Ipsum Feugiat",
    width: "100%",
    height: "200px",
    background: "#444",
    bigText: true,
  },
  {
    bold: false,
    imgUrl: bubblesImg,
    title: "Rhoncus Semper",
    width: "100%",
    height: "200px",
    background: "#5e5eee",
    bigText: false,
  },
  {
    bold: false,
    imgUrl: sunflowerImg,
    title: "Ipsum Feugiat",
    width: "100%",
    height: "200px",
    background: "#444",
    bigText: true,
  },
  {
    bold: false,
    imgUrl: bubblesImg,
    title: "Rhoncus Semper",
    width: "100%",
    height: "200px",
    background: "#5e5eee",
    bigText: false,
  },
];

function CardsBox() {
  return (
    <div className="cardsField">
      {cardsInfo.map((info, index) => {
        return (
          <Card
            key={index}
            boldText={info.bold}
            imgUrl={info.imgUrl}
            imgWidth={info.width}
            imgHeight={info.height}
            cardText={info.title}
            bckgColor={info.background}
            biggerText={info.bigText}
          />
        );
      })}
    </div>
  );
}

export default CardsBox;

/// BONUS: Dinamiški stiliai cardams.
// const dataArray = [
//   {
//       background: "#000",
//       bigText: true
//   },
//   {
//       background: "#5e5eee",
//       bigText: false
//   }
// ]
