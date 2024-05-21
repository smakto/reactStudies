// import Button from "./Button";

export function PageHead({ pageHead, buttonField }) {
  return (
    <div className="pageHead">
      <h1>{pageHead}</h1>
      {buttonField}
    </div>
  );
}
