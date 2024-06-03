import { useData } from "../hooks/useData";
import { Button } from "../components/Button";
import { PageHead } from "../components/PageHead";
import "../styles/meds.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SearchField } from "../components/SearchField";
import { useSearch } from "../hooks/useSearch";

function searchFunct(element, inputValue) {
  if (!element.name && !element.description) {
    return false;
  }
  return (
    element.name.toLowerCase().includes(inputValue.toLowerCase()) ||
    element.description.toLowerCase().includes(inputValue.toLowerCase())
  );
}

export function Medications() {
  const { dataSet } = useData("meds?limit=250");

  const [filteredData, setNewFilteredData] = useState([]);
  const [data, handleInput] = useSearch(filteredData, searchFunct);

  useEffect(() => {
    setNewFilteredData(
      dataSet.filter(
        (items) => items.name !== null || items.description !== null
      )
    );
  }, [dataSet]);

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
      <SearchField handleInput={handleInput} />
      <div className="medsContainer">
        {data.map((item) => {
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
