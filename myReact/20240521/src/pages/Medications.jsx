import { useData } from "../hooks/useData";
import { Button } from "../components/Button";
import { PageHead } from "../components/PageHead";
import "../styles/meds.css";

export function Medications() {
  const { dataSet } = useData("meds");

  return (
    <>
      <PageHead
        pageHead={"Medications"}
        buttonField={
          <div className="pageHeadButton">
            <Button buttonText={"Add Medication"} primary />
          </div>
        }
      />
      <div className="medsContainer">
        {dataSet.map((item) => {
          return (
            <div className="medCard" key={item.id}>
              <h3>{item.name}</h3>
              <p>Description: {item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
