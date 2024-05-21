// import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Pets } from "./pages/Pets";
// import { Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <Header navElem1={"Pets"} navElem2={"Medications"} />
      <Pets />
    </main>
  );
}

export default App;
