import { Link } from "react-router-dom";
import "../styles/header.css";

export function Header() {
  return (
    <header>
      <div className="headerWrapper">
        <img
          src="https://cdn.dribbble.com/users/1572563/screenshots/3537417/media/6d047578c054e3bdd5702effe3f515c2.jpg?resize=400x300&vertical=center"
          alt="logo"
        ></img>
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
