import { Button } from "../components/Button";
import "../styles/petAdd.css";

export function AddPet() {
  return (
    <div className="addFormWrap">
      <form className="petAddForm">
        <Label type={"text"} name={"petName"} label={"Pet name:"} />
        <Label type={"date"} name={"birthday"} label={"Date of birth:"} />
        <Label type={"email"} name={"ownerEmail"} label={"Owner email:"} />
        <Button primary type="submit" buttonText={"Add pet"} />
      </form>
    </div>
  );
}

function Label({ label, name, type }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name}></input>
    </>
  );
}
