import "../styles/navigation.css";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <header>
      <nav>
        <Link to={"/"}>
          {" "}
          <p>Home</p>
        </Link>
        <Link to={"/add"}>
          {" "}
          <p>Add</p>
        </Link>
      </nav>
    </header>
  );
}
