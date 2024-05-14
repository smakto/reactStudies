// (kol kas propsų nepriima, viskas statiškai)
import "../styles/navigation.css";

import { Link } from "react-router-dom";

function Navigation() {
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

export default Navigation;
