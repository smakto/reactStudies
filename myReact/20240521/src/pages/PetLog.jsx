import { Link, useParams } from "react-router-dom";
import { useData } from "../hooks/useData";
import { useToggle } from "../hooks/buttonToggle";
import { PageHead } from "../components/PageHead";
import "../styles/petLog.css";
import { Button } from "../components/Button";
import { useState } from "react";
import { useName } from "../hooks/getName";
import { SearchField } from "../components/SearchField";
import { useSearch } from "../hooks/useSearch";

function searchFunct(element, inputValue) {
  // Logs - description & status;
  // Prescriptions - description & name
  if (!element.description && !element.status && !element.name) {
    return false;
  }
  return (
    element.description.toLowerCase().includes(inputValue.toLowerCase()) ||
    element.status.toLowerCase().includes(inputValue.toLowerCase()) ||
    element.name.toLowerCase().includes(inputValue.toLowerCase())
  );
}

export function PetLog() {
  const params = useParams();
  const { dataSet } = useData(`logs/${params.id}`);
  const { petName } = useName(params.id);

  const [logShow, setLogShow] = useState(true);
  const [prscShow, setprscShow] = useState(true);

  const [toggleLog] = useToggle(logShow, setLogShow);
  const [togglePrsc] = useToggle(prscShow, setprscShow);

  // const [data, handleInput] = useSearch(dataSet, searchFunct);

  return (
    <main>
      {petName.length > 0 && (
        <PageHead
          pageHead={`${petName[0].name}: Health records`}
          buttonField={
            <div>
              <Link to={`/addPrescription/${params.id}`}>
                <Button primary buttonText={"ADD PRESCRIPTION"} />
              </Link>
              <Link to={`/addLog/${params.id}`}>
                <Button buttonText={"ADD LOG"} />
              </Link>
            </div>
          }
        />
      )}
      {/* <SearchField handleInput={handleInput} /> */}

      {dataSet.length > 0 && (
        <>
          <div className="displayButtons">
            <p>Display:</p>
            <Button
              primary={logShow}
              buttonText={"LOGS"}
              clickFunction={toggleLog}
            />
            <Button
              primary={prscShow}
              buttonText={"PRESCRIPTIONS"}
              clickFunction={togglePrsc}
            />
          </div>
        </>
      )}
      <div className="petLogContainer">
        {logShow && <LogCards logType={"logs"} />}
        {prscShow && <LogCards logType={"prescriptions"} />}
      </div>
    </main>
  );
}

function LogCards({ logType }) {
  const params = useParams();
  const { dataSet } = useData(`${logType}/${params.id}`);

  return (
    <>
      {dataSet.length > 0 && (
        <>
          {dataSet.map((item, index) => {
            return (
              <div key={index} className="petLogCard">
                <h4>{logType === "logs" ? item.description : item.name}</h4>
                <h4>{logType === "logs" ? item.status : item.description}</h4>
                {logType === "prescriptions" && <h5>{item.timestamp}</h5>}
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
