import "./Top.css";
import Title from "./Title.jsx";
import AboutText from "./AboutText.jsx";
import Button from "./Button.jsx";

function Top() {
  return (
    <header>
      <Title title="Title" />
      <AboutText line1="Some about text" line2="in two lines" />
      <Button />
    </header>
  );
}

export default Top;
