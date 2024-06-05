/* eslint-disable react-hooks/exhaustive-deps */
// import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToggleLogProvider } from "./contexts/ToggleLogContext";
import { PetNameProvider } from "./contexts/PetNameContext";
import { useGeneralContext } from "./contexts/useContext";
import { useEffect, useRef } from "react";

function App() {
  const mainRef = useRef();
  const myContext = useGeneralContext();

  useEffect(() => {
    myContext.dispatch({
      type: "MAINREF",
      newMainRef: mainRef,
    });
  }, []);

  return (
    <ThemeProvider>
      <PetNameProvider>
        <ToggleLogProvider>
          <main ref={mainRef}>
            <Header />
            <Outlet />
            <Footer />
          </main>
        </ToggleLogProvider>
      </PetNameProvider>
    </ThemeProvider>
  );
}

export default App;
