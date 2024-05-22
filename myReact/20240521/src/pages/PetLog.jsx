import { useParams } from "react-router-dom";
import { useData } from "../hooks/useData";
import { useEffect, useState } from "react";
import { PageHead } from "../components/PageHead";
import "../styles/petLog.css";
import { Button } from "../components/Button";

export function PetLog() {
  const params = useParams();
  const { dataSet } = useData(`logs/${params.id}`);
  const [petLog, setNewLog] = useState([]);

  useEffect(() => {
    setNewLog(dataSet[0]);
  }, [dataSet]);

  console.log("PetLog", petLog);
  return (
    petLog && (
      <main>
        <PageHead
          pageHead={`${petLog.name}: Health records`}
          buttonField={
            <div>
              <Button primary buttonText={"ADD PRESCRIPTION"} />
              <Button buttonText={"ADD LOG"} />
            </div>
          }
        />
        <div className="petLogContainer">
          <h3>
            Pet: {petLog.name} (ID{petLog.id})
          </h3>
          <h4>Date of birth: {new Date(petLog.dob).toLocaleDateString()}</h4>
          <h4>Complaints: {petLog.description}</h4>
          <h3>Status: {petLog.status}</h3>
        </div>
      </main>
    )
  );
}
