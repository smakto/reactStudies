import "./Main.css";

function Main() {
  return (
    <main>
      <MainAbout></MainAbout>
      <MainContent></MainContent>
    </main>
  );
}

function MainAbout() {
  return (
    <div className="mainAbout">
      <AboutCards header="About"></AboutCards>
      <AboutCards header="Company"></AboutCards>
      <AboutCards header="Services"></AboutCards>
    </div>
  );
}

function AboutCards(props) {
  const aboutText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div>
      <h3>{props.header}</h3>
      <p>{aboutText}</p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="contentContainer">
      <BottomContent></BottomContent>
      <BottomSideNav></BottomSideNav>
    </div>
  );
}

function BottomContent() {
  return (
    <div id="product" className="bottomContent">
      <h2>Content</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h3>Sub Header</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

let navElements = [
  { link: "#home", linkName: "Home" },
  { link: "#product", linkName: "Product" },
  { link: "#company", linkName: "Company" },
  { link: "#contact", linkName: "Contact" },
];

function BottomSideNav() {
  return (
    <nav id="contact">
      <h3>Navigation</h3>
      <ul>
        {navElements.map((element) => {
          return <ListElement link={element.link} name={element.linkName} />;
        })}
      </ul>
    </nav>
  );
}

function ListElement(props) {
  return (
    <a href={props.link}>
      {" "}
      <p>{props.name}</p>
    </a>
  );
}

export default Main;
