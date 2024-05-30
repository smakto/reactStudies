// import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToggleLogProvider } from "./contexts/ToggleLogContext";

function App() {
  return (
    <ThemeProvider>
      <ToggleLogProvider>
        <main>
          <Header />
          <Outlet />
          <Footer />
        </main>
      </ToggleLogProvider>
    </ThemeProvider>
  );
}

export default App;
