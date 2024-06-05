import { useThemeContext } from "../contexts/ThemeContext";

const blueStyle = `h1 {
  color: blue;
  font-weight: normal;
}`;

const orangeStyle = `h1 {
  color: orange;
  font-weight: normal;
}`;

const redStyle = `h1 {
  color: red;
  font-weight: normal;
}`;

export function PageHead({ pageHead, buttonField }) {
  const myState = useThemeContext();
  return (
    <div className="pageHead">
      <style>
        {myState.colorScheme === "blue"
          ? blueStyle
          : myState.colorScheme === "orange"
          ? orangeStyle
          : redStyle}
      </style>
      <h1>{pageHead}</h1>
      {buttonField}
    </div>
  );
}
