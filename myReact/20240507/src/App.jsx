// import { useState } from "react";
import "./App.css";
import ToDoApp from "./components/ToDo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <div className="todoField">
        <Routes>
          <Route path="/" Component={ToDoApp} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
