import { Link } from "react-router-dom";
import "../styles/header.css";
import { useThemeContext } from "../contexts/ThemeContext";
import { useEffect } from "react";

const blueStyle = `
  header nav button {
    margin-right: 75px;
    background: none;
    border: none;
    color: blue;
    font-weight: bold;
    font-size: 16px;
  }
}`;

const orangeStyle = `
  header nav button {
    margin-right: 75px;
    background: none;
    border: none;
    color: orange;
    font-weight: bold;
    font-size: 16px;
  }
}`;

const redStyle = `
  header nav button {
    margin-right: 75px;
    background: none;
    border: none;
    color: red;
    font-weight: bold;
    font-size: 16px;
  }
}`;

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
          <ColorSelector />
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
  const myState = useThemeContext();

  return (
    <nav>
      <style>
        {myState.colorScheme === "blue"
          ? blueStyle
          : myState.colorScheme === "orange"
          ? orangeStyle
          : redStyle}
      </style>
      <Link to={"/pets"}>
        <button>Pets</button>
      </Link>
      <Link to={"/medications"}>
        <button>Medications</button>
      </Link>
    </nav>
  );
}

function ColorSelector() {
  const myState = useThemeContext();

  return (
    <select
      className="colorSelect"
      onChange={(e) => {
        myState.dispatch({
          type: e.target.value.toUpperCase(),
        });
      }}
    >
      <option defaultChecked>Orange</option>
      <option>Blue</option>
      <option>Red</option>
    </select>
  );
}
