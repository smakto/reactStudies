/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Button } from "../components/Button";
import "../styles/petAdd.css";
import { useData } from "../hooks/useData";
import { Input } from "../components/Input";
import { useNavigate, useParams } from "react-router-dom";
import { useGeneralContext } from "../contexts/useContext";

export function AddPrescription() {
  const params = useParams("");
  const { addData } = useData(`prescriptions`);
  const { dataSet, loaded } = useData(`meds`);
  const myGenContext = useGeneralContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (loaded && myGenContext.prescriptionName !== "prscName") {
      let result = dataSet.filter(
        (item) => item.name === myGenContext.prescriptionName
      );
      console.log(result);
      myGenContext.dispatch({
        type: "PRESCRPTIONID",
        newPrescriptionID: result[0].id,
      });
    }
  }, [loaded, myGenContext.prescriptionName]);

  function handleChange(value, actionType, action) {
    myGenContext.dispatch({
      type: actionType,
      [action]: value,
    });
  }

  function createLog() {
    addData({
      medication_id: myGenContext.prescriptionID,
      pet_id: params.id,
      comment: myGenContext.prescriptionComment,
    });
  }

  return (
    <div className="addFormWrap">
      <form
        className="addForm"
        onSubmit={(e) => {
          e.preventDefault();
          createLog();
          navigate(`/logs/${params.id}`);
        }}
      >
        <select
          onChange={(e) => {
            myGenContext.dispatch({
              type: "PRESCRPTIONNAME",
              newPrescriptionName: e.target.value,
            });
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
          actionType="PRESCRPTIONCOMMENT"
          action="newPrescriptionComment"
        />
        <Button primary type="submit" buttonText={"Add Log"} />
      </form>
    </div>
  );
}
