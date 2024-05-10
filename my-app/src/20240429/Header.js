import "./Header.css";

function Header() {
  return (
    <>
      <HeaderLine></HeaderLine>
    </>
  );
}

let navElements = [
  { link: "#home", linkName: "Home" },
  { link: "#product", linkName: "Product" },
  { link: "#company", linkName: "Company" },
  { link: "#contact", linkName: "Contact" },
];

function HeaderLine() {
  return (
    <header>
      <div id="home">
        <img
          src="https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png"
          alt="logo"
        />
      </div>
      <nav>
        {navElements.map((element) => {
          return <NavElement link={element.link} name={element.linkName} />;
        })}
      </nav>
      <img
        id="company"
        src="https://cdn.ihsmarkit.com/www/images/0821/Company-178447404.jpg"
        alt="company"
      />
    </header>
  );
}

function NavElement(props) {
  return (
    <a href={props.link}>
      {" "}
      <p>{props.name}</p>
    </a>
  );
}

export default Header;
