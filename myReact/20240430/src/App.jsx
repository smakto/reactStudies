// import { useState } from "react";

import "./App.css";
import Top from "./componentsTask/Top.jsx";
import Main from "./componentsTask/Main.jsx";

// import Title from "./componentsTask/Title.jsx";

// import Button from "./components/Button.jsx";
// import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Top />
      <Main />
    </>
  );
}

export default App;

/// CAO užduotys (training):

// function App() {
//   return (
//     <>
//       {" "}
//       <Button />
//       <Hero title="Info Hero" subtitle="Info subtitle" color="blue" />
//     </>
//   );
// }

/////
/////
/// Užduotys iš paskaitos:
/////
/////

// function App() {
//   return (
//     <>
//       <Button more={true} />
//       <Button more={false} />
//       <MapTaks />
//     </>
//   );
// }

// function Button(props) {
//   let showMore = props.more;
//   return <button>{showMore === true ? "Show More" : "Show Less"}</button>;
// }

// let users = [
//   { name: "Jonas", age: 21 },
//   { name: "Petras", age: 22 },
// ];

// function MapTaks() {
//   return (
//     <div>
//       <ul>
//         {users.map((element, index) => {
//           return (
//             <li key={index}>
//               {index + 1}. Name {element.name}, age {element.age}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
