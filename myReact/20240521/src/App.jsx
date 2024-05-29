// import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
