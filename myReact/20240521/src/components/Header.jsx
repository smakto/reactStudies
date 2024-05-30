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
            src="https://www.globalvetlink.com/wp-content/uploads/2019/11/petvet-logo.png"
            alt="logo"
          ></img>
        </Link>

        <div className="themeSelector">
          <button
            className={`themeButton-${myState.theme}`}
            onClick={() => {
              myState.dispatch({
                type: myState.theme === "dark" ? "LIGHT" : "DARK",
              });
            }}
          >
            {myState.theme.toUpperCase()}
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
