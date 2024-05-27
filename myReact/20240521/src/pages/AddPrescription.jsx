import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import "../styles/petAdd.css";
import { useData } from "../hooks/useData";
import { Input } from "../components/Input";
import { useNavigate, useParams } from "react-router-dom";

export function AddPrescription() {
  const params = useParams("");
  const { addData } = useData(`prescriptions`);
  const { dataSet } = useData(`meds`);
  const [comment, setComment] = useState("");
  const [medName, setMedName] = useState("");
  const [medId, setMedId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (medName) {
      let result = dataSet.find((item) => item.name === medName);
      setMedId(result.id);
    }
  }, [medName, dataSet]);

  function handleChange(value, setData) {
    setData(value);
  }

  function createLog() {
    addData({
      medication_id: medId,
      pet_id: params.id,
      comment: comment,
    });
  }

  return (
    <div className="addFormWrap">
      <form
        className="addForm"
        onSubmit={() => {
          event.preventDefault();
          createLog();
          navigate(`/logs/${params.id}`);
        }}
      >
        <select
          onChange={(e) => {
            setMedName(e.target.value);
          }}
        >
          <option selected disabled>
            Please select medication
          </option>
          {dataSet.map((item) => {
            return <option key={item.id}>{item.name}</option>;
          })}
        </select>

        <Input
          type={"text"}
          name={"logStatus"}
          label={"Comment:"}
          handleChange={handleChange}
          setData={setComment}
        />
        <Button primary type="submit" buttonText={"Add Log"} />
      </form>
    </div>
  );
}
