import { useState } from "react";
import { Button } from "../components/Button";
import "../styles/petAdd.css";
import { useData } from "../hooks/useData";
import { Input } from "../components/Input";
import { useParams } from "react-router-dom";

export function AddLog() {
  const params = useParams("");
  const { addData } = useData(`logs`);

  const [descrInput, setDescr] = useState("");
  const [statusInput, setStatus] = useState("");

  console.log(params.id);

  function handleChange(value, setData) {
    setData(value);
  }

  function createLog() {
    addData({
      pet_id: params.id,
      description: descrInput,
      status: statusInput,
    });
  }

  return (
    <div className="addFormWrap">
      <form
        className="addForm"
        onSubmit={() => {
          event.preventDefault();
          createLog();
        }}
      >
        <Input
          type={"text"}
          name={"logDescription"}
          label={"Description:"}
          handleChange={handleChange}
          setData={setDescr}
        />

        <Input
          type={"text"}
          name={"logStatus"}
          label={"Status:"}
          handleChange={handleChange}
          setData={setStatus}
        />
        <Button primary type="submit" buttonText={"Add Log"} />
      </form>
    </div>
  );
}
