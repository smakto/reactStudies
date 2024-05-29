import { Link, useParams } from "react-router-dom";
import { useData } from "../hooks/useData";
import { useToggle } from "../hooks/buttonToggle";
import { PageHead } from "../components/PageHead";
import "../styles/petLog.css";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { useName } from "../hooks/getName";
import { SearchField } from "../components/SearchField";
import { useSearch } from "../hooks/useSearch";

// function searchFunct(element, inputValue) {
//   // Logs - description & status;
//   // Prescriptions - description & name
//   if ((!element.description && !element.status) || !element.name) {
//     return false;
//   }
//   return (
//     element.description.toLowerCase().includes(inputValue.toLowerCase()) ||
//     element.status.toLowerCase().includes(inputValue.toLowerCase()) ||
//     element.name.toLowerCase().includes(inputValue.toLowerCase())
//   );
// }

export function PetLog() {
  // const { logsDataSet: dataSet } = useData(`logs/${params.id}`); /// Kaip išsikviesti?
  const params = useParams();
  const { petName } = useName(params.id);
  const [data, setNewData] = useState([]);

  const logsDataSet = useData(`logs/${params.id}`);
  const prescriptionDataSet = useData(`prescriptions/${params.id}`);

  useEffect(() => {
    logsDataSet.dataSet.map((items) => {
      items.type = "log";
    });
    prescriptionDataSet.dataSet.map((items) => {
      items.type = "prescription";
    });
  }, [logsDataSet.dataSet, prescriptionDataSet.dataSet]);

  useEffect(() => {
    mergeArrays();
  }, []);

  function mergeArrays() {
    if (prescriptionDataSet.dataSet && logsDataSet.dataSet)
      setNewData([...prescriptionDataSet.dataSet, ...logsDataSet.dataSet]);
  }

  const [logShow, setLogShow] = useState(true);
  const [prscShow, setprscShow] = useState(true);

  const [toggleLog] = useToggle(logShow, setLogShow);
  const [togglePrsc] = useToggle(prscShow, setprscShow);

  useEffect(() => {
    if (!logShow && prscShow) {
      setNewData([...prescriptionDataSet.dataSet]);
    } else if (logShow && !prscShow) {
      setNewData([...logsDataSet.dataSet]);
    } else if (!logShow && !prscShow) {
      setNewData([]);
    } else if (logShow && prscShow) {
      mergeArrays();
    }
  }, [logShow, prscShow]);

  console.log(logShow, prscShow);

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

      {data.length > 0 && (
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
        {data.length > 0 &&
          data.map((items) => {
            return (
              <LogCards
                key={items.id}
                logType={items.type}
                description={items.description}
                name={items.name}
                status={items.status}
                timestamp={items.timestamp}
              />
            );
          })}
      </div>
    </main>
  );
}

function LogCards({ logType, description, name, status, timestamp }) {
  return (
    <div className="petLogCard">
      <h4>{logType === "log" ? description : name}</h4>
      <h4>{logType === "log" ? status : description}</h4>
      {logType === "prescription" && <h5>{timestamp}</h5>}
      test
    </div>
  );
}

/// Apjungti data logs ir perscriptions į vieną dataSet.
/// Kiekvienam dataSet priskirti naują type:log/perscription
/// Search iš bendro dataSet
/// ToggleData pagal type
