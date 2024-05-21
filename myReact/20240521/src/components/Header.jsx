import "../styles/header.css";

export function Header({ navElem1, navElem2 }) {
  return (
    <header>
      <div className="headerWrapper">
        <img
          src="https://cdn.dribbble.com/users/1572563/screenshots/3537417/media/6d047578c054e3bdd5702effe3f515c2.jpg?resize=400x300&vertical=center"
          alt="logo"
        ></img>
        <Navigation elem1={navElem1} elem2={navElem2} />
      </div>
    </header>
  );
}

function Navigation({ elem1, elem2 }) {
  return (
    <nav>
      <button>{elem1}</button>
      <button>{elem2}</button>
    </nav>
  );
}
