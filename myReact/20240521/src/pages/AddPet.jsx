import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import "../styles/petAdd.css";
import { useData } from "../hooks/useData";
import { Input } from "../components/Input";

export function AddPet() {
  const { addData } = useData("pets");

  const [nameInput, setName] = useState("");
  const [dateInput, setDate] = useState("");
  const [emailInput, setEmail] = useState("");

  useEffect(() => {
    if (dateInput) {
      let date = new Date(dateInput);
      let milisecs = date.getTime();
      setDate(milisecs);
    }
  }, [dateInput]);

  function handleChange(value, setData) {
    setData(value);
  }

  function createPet() {
    addData({
      name: nameInput,
      dob: dateInput,
      client_email: emailInput,
    });
  }

  return (
    <div className="addFormWrap">
      <form
        className="addForm"
        onSubmit={() => {
          event.preventDefault();
          createPet();
        }}
      >
        <Input
          type={"text"}
          name={"petName"}
          label={"Pet name:"}
          handleChange={handleChange}
          setData={setName}
        />
        <Input
          type={"date"}
          name={"birthday"}
          label={"Date of birth:"}
          handleChange={handleChange}
          setData={setDate}
        />
        <Input
          type={"email"}
          name={"ownerEmail"}
          label={"Owner's email:"}
          handleChange={handleChange}
          setData={setEmail}
        />
        <Button primary type="submit" buttonText={"Add pet"} />
      </form>
    </div>
  );
}
