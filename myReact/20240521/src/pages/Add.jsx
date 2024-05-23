import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import "../styles/petAdd.css";
import { useData } from "../hooks/useData";

export function AddPet() {
  const { dataSet, addData } = useData("pets");
  const [maxID, setMaxID] = useState(0);

  const [nameInput, setName] = useState("");
  const [dateInput, setDate] = useState("");
  const [emailInput, setEmail] = useState("");

  useEffect(() => {
    if (dataSet) {
      for (let i = 0; i < dataSet.length; i++) {
        dataSet[i].id > maxID && setMaxID(dataSet[i].id + 1);
      }
    }
  }, [dataSet, maxID]);

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
        className="petAddForm"
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

function Input({ label, name, type, handleChange, setData }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        onChange={() => {
          event.preventDefault();
          handleChange(event.target.value, setData);
        }}
      ></input>
    </>
  );
}
