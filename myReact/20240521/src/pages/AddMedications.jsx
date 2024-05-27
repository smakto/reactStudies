import { useState } from "react";
import { Button } from "../components/Button";
import "../styles/petAdd.css";
import { useData } from "../hooks/useData";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";

export function AddMedication() {
  const { addData } = useData("meds");
  const navigate = useNavigate();
  const [nameInput, setName] = useState("");
  const [descrInput, setDescr] = useState("");

  function handleChange(value, setData) {
    setData(value);
  }

  function createMed() {
    addData({
      name: nameInput,
      description: descrInput,
    });
  }

  return (
    <div className="addFormWrap">
      <form
        className="addForm"
        onSubmit={() => {
          event.preventDefault();
          createMed();
          navigate("/medications");
        }}
      >
        <Input
          type={"text"}
          name={"medName"}
          label={"Medication name:"}
          handleChange={handleChange}
          setData={setName}
        />

        <Input
          type={"text"}
          name={"medDescr"}
          label={"Description:"}
          handleChange={handleChange}
          setData={setDescr}
        />
        <Button primary type="submit" buttonText={"Add Medication"} />
      </form>
    </div>
  );
}
