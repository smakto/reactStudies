import { useData } from "../hooks/useData";
import { Button } from "../components/Button";
import { PageHead } from "../components/PageHead";
import "../styles/meds.css";
import { Link } from "react-router-dom";

export function Medications() {
  const { dataSet } = useData("meds?limit=250");

  return (
    <>
      <PageHead
        pageHead={"Medications"}
        buttonField={
          <div className="pageHeadButton">
            <Link to={"/addMed"}>
              <Button buttonText={"Add Medication"} primary />{" "}
            </Link>
          </div>
        }
      />
      <div className="medsContainer">
        {dataSet.map((item) => {
          if (item.name && item.description)
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
