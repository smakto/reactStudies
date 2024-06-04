import "./App.css";
import { CounterProvider } from "./components/CounterContext";
import { Home } from "./components/Home";

export function App() {
  return (
    <>
      <CounterProvider>
        <Home />
      </CounterProvider>
    </>
  );
}
