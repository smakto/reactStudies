import { Link } from "react-router-dom";
import "../styles/header.css";
import { useThemeContext } from "../contexts/ThemeContext";
import { useEffect } from "react";

export function Header() {
  const myState = useThemeContext();

  useEffect(() => {
    document.querySelector("body").className = myState.theme;
  }, [myState]);

  return (
    <header>
      <div className="headerWrapper">
        <Link to={"/"}>
          <img
            src="https://cdn.dribbble.com/users/1572563/screenshots/3537417/media/6d047578c054e3bdd5702effe3f515c2.jpg"
            alt="logo"
          ></img>
        </Link>

        <div className="themeSelector">
          <button
            onClick={() => {
              myState.dispatch({
                type: "LIGHT",
              });
            }}
          >
            Light
          </button>
          <button
            onClick={() => {
              myState.dispatch({
                type: "DARK",
              });
            }}
          >
            Dark
          </button>
        </div>

        <Navigation />
      </div>
    </header>
  );
}

function Navigation() {
  return (
    <nav>
      <Link to={"/pets"}>
        <button>Pets</button>
      </Link>
      <Link to={"/medications"}>
        <button>Medications</button>
      </Link>
    </nav>
  );
}
