// import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home.jsx";
import { Add } from "./pages/Add.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/add" Component={Add} />
      </Routes>
    </>
  );
}

export default App;
