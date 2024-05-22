import "../styles/pets.css";
import { useData } from "../hooks/useData";
import { Button } from "../components/Button";
import { PageHead } from "../components/PageHead";
import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

export function Pets() {
  const { dataSet, deletePet } = useData("pets");

  const navigate = useNavigate();

  function goToLog(id) {
    navigate(`/logs/${id}`);
  }

  return (
    <>
      <PageHead
        pageHead={"Pet List"}
        buttonField={
          <div className="pageHeadButton">
            <Link to={"/add"}>
              <Button buttonText={"Add Pet"} primary />
            </Link>
          </div>
        }
      />
      <div className="petsContainer">
        {dataSet.map((item) => {
          if (item.archived != 1)
            return (
              <div key={item.id} className="petCard">
                <h4>{item.name}</h4>
                <p className="petDob">
                  Born: {new Date(item.dob).toLocaleDateString()}
                </p>
                <p className="ownerEmail">{item.client_email}</p>
                <Button
                  primary
                  buttonText={"VIEW LOG"}
                  clickFunction={() => {
                    goToLog(item.id);
                  }}
                ></Button>{" "}
                <Button
                  buttonText={"DELETE"}
                  clickFunction={() => {
                    deletePet(item.id);
                  }}
                ></Button>
              </div>
            );
        })}
      </div>
    </>
  );
}
