import { useParams } from "react-router-dom";
import { useData } from "../hooks/useData";
// import { useEffect, useState } from "react";
import { PageHead } from "../components/PageHead";
import "../styles/petLog.css";
import { Button } from "../components/Button";
import { useState } from "react";

export function PetLog() {
  const params = useParams();
  const { dataSet } = useData(`logs/${params.id}`);

  const [logShow, setLogShow] = useState(true);
  const [prscShow, setprscShow] = useState(true);

  function buttonToggleLog() {
    setLogShow(logShow ? false : true);
  }

  function buttonTogglePrsc() {
    setprscShow(prscShow ? false : true);
  }

  return (
    <main>
      {dataSet.length > 0 && (
        <>
          <PageHead
            pageHead={`${dataSet[0].name}: Health records`}
            buttonField={
              <div>
                <Button primary buttonText={"ADD PRESCRIPTION"} />
                <Button buttonText={"ADD LOG"} />
              </div>
            }
          />
          <div>
            <p>Display:</p>
            <Button
              primary={logShow}
              buttonText={"LOGS"}
              clickFunction={buttonToggleLog}
            />
            <Button
              primary={prscShow}
              buttonText={"PRESCRIPTIONS"}
              clickFunction={buttonTogglePrsc}
            />
          </div>
        </>
      )}
      {logShow && <LogCards logType={"logs"} />}
      {prscShow && <LogCards logType={"prescriptions"} />}
    </main>
  );
}

function LogCards({ logType }) {
  const params = useParams();
  const { dataSet } = useData(`${logType}/${params.id}`);
  console.log(dataSet);
  return (
    <div className="petLogContainer">
      {dataSet.length > 0 && (
        <>
          {dataSet.map((item) => {
            return (
              <div key={item.id} className="petLogCard">
                <h4>{logType === "logs" ? item.description : item.name}</h4>
                <h4>{logType === "logs" ? item.status : item.description}</h4>
                {logType === "prescriptions" && <h5>{item.timestamp}</h5>}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
