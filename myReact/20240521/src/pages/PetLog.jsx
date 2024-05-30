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

function searchFunct(element, inputValue) {
  if (!element.description && !element.status && !element.name) {
    return false;
  }

  if (element.description && element.status) {
    return (
      element.description.toLowerCase().includes(inputValue.toLowerCase()) ||
      element.status.toLowerCase().includes(inputValue.toLowerCase())
    );
  } else if (element.description && element.name) {
    return (
      element.description.toLowerCase().includes(inputValue.toLowerCase()) ||
      element.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }
}

export function PetLog() {
  // const { logsDataSet: dataSet } = useData(`logs/${params.id}`); /// Kaip išsikviesti?
  const params = useParams();
  const { petName } = useName(params.id);

  const [combinedData, setNewData] = useState([]);

  const logsDataSet = useData(`logs/${params.id}`);
  const prescriptionDataSet = useData(`prescriptions/${params.id}`);

  useEffect(() => {
    if (logsDataSet.loaded && prescriptionDataSet.loaded) {
      setNewData([
        ...prescriptionDataSet.dataSet.map((item) => ({
          ...item,
          type: "prescription",
          hidden: false,
          localID: Math.random() * 500,
        })),
        ...logsDataSet.dataSet.map((item) => {
          return {
            ...item,
            type: "log",
            hidden: false,
            localID: Math.random() * 500,
          };
        }),
      ]);
    }
  }, [logsDataSet.loaded, prescriptionDataSet.loaded]);

  const [logShow, setLogShow] = useState(true);
  const [prscShow, setprscShow] = useState(true);

  const [toggleLog] = useToggle(logShow, setLogShow);
  const [togglePrsc] = useToggle(prscShow, setprscShow);

  useEffect(() => {
    combinedData.length > 0 &&
      setNewData(
        combinedData.map((item) => {
          if (item.type === "log") {
            return {
              ...item,
              hidden: logShow ? false : true,
            };
          } else if (item.type === "prescription") {
            return {
              ...item,
              hidden: prscShow ? false : true,
            };
          }
        })
      );
  }, [logShow, prscShow]);

  const [data, handleInput] = useSearch(combinedData, searchFunct);

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
      <SearchField handleInput={handleInput}></SearchField>
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
          data.map((item) => {
            if (!item.hidden)
              return (
                <LogCards
                  key={item.localID}
                  logType={item.type}
                  description={item.description}
                  name={item.name}
                  status={item.status}
                  timestamp={item.timestamp}
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
      <h2>{logType}</h2>
    </div>
  );
}
