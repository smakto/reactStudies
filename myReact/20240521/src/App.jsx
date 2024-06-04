// import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToggleLogProvider } from "./contexts/ToggleLogContext";
import { PetNameProvider } from "./contexts/PetNameContext";
import { GeneralContextProvider } from "./contexts/useContext";

function App() {
  return (
    <GeneralContextProvider>
      <ThemeProvider>
        <PetNameProvider>
          <ToggleLogProvider>
            <main>
              <Header />
              <Outlet />
              <Footer />
            </main>
          </ToggleLogProvider>
        </PetNameProvider>
      </ThemeProvider>
    </GeneralContextProvider>
  );
}

export default App;
