/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom";
import { useData } from "../hooks/useData";
import { PageHead } from "../components/PageHead";
import "../styles/petLog.css";
import { Button } from "../components/Button";
import { useEffect } from "react";
import { SearchField } from "../components/SearchField";
import { useSearch } from "../hooks/useSearch";
import { useToggleLogContext } from "../contexts/ToggleLogContext";
import { usePetNameContext } from "../contexts/PetNameContext";
import { useGeneralContext } from "../contexts/useContext";

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
  const myPetName = usePetNameContext();
  const myLogState = useToggleLogContext();
  const myGenContext = useGeneralContext();
  const params = useParams();
  const logsDataSet = useData(`logs/${params.id}`);
  const prescriptionDataSet = useData(`prescriptions/${params.id}`);
  const [data, handleInput] = useSearch(myGenContext.combinedData, searchFunct);

  useEffect(() => {
    if (logsDataSet.loaded && prescriptionDataSet.loaded) {
      myGenContext.dispatch({
        type: "COMBODATA",
        newComboData: [
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
        ],
      });
    }
  }, [logsDataSet.loaded, prescriptionDataSet.loaded]);

  useEffect(() => {
    if (logsDataSet.loaded && prescriptionDataSet.loaded) {
      myGenContext.dispatch({
        type: "COMBODATA",
        newComboData: myGenContext.combinedData.map((item) => {
          if (item.type === "log") {
            return {
              ...item,
              hidden: !myLogState.logs,
            };
          } else if (item.type === "prescription") {
            return {
              ...item,
              hidden: !myLogState.prescriptions,
            };
          }
        }),
      });
    }
  }, [myLogState.logs, myLogState.prescriptions]);

  return (
    <main>
      <PageHead
        pageHead={`${myPetName.name}: Health records`}
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

      <SearchField handleInput={handleInput}></SearchField>
      {data.length > 0 && (
        <>
          <div className="displayButtons">
            <p>Display:</p>
            <Button
              primary={myLogState.logs}
              buttonText={"LOGS"}
              clickFunction={() => {
                myLogState.dispatch({
                  type: myLogState.logs ? "logsOFF" : "logsON",
                });
              }}
            />
            <Button
              primary={myLogState.prescriptions}
              buttonText={"PRESCRIPTIONS"}
              clickFunction={() => {
                myLogState.dispatch({
                  type: myLogState.prescriptions
                    ? "prescriptionsOFF"
                    : "prescriptionsON",
                });
              }}
            />
          </div>
        </>
      )}
      <div className="petLogContainer">
        {logsDataSet.loaded &&
          prescriptionDataSet.loaded &&
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
    </div>
  );
}
