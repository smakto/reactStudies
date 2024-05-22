// import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
// import { Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
