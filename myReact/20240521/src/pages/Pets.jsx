import "../styles/pets.css";
import { useData } from "../hooks/useData";
import { Button } from "../components/Button";
import { PageHead } from "../components/PageHead";
import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

export function Pets() {
  const { dataSet, deleteByID } = useData("pets");

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
            <Link to={"/addPet"}>
              <Button buttonText={"Add Pet"} primary />
            </Link>
          </div>
        }
      />
      <div className="petsContainer">
        {dataSet.map((item) => {
          if (item.archived != 1)
            return (
              <PetCard
                key={item.id}
                id={item.id}
                name={item.name}
                dob={item.dob}
                email={item.client_email}
                clickDel={deleteByID}
                clickView={goToLog}
              />
            );
        })}
      </div>
    </>
  );
}

function PetCard({ id, name, dob, email, clickDel, clickView }) {
  return (
    <div className="petCard">
      <h4>{name}</h4>
      <p className="petDob">Born: {new Date(dob).toLocaleDateString()}</p>
      <p className="ownerEmail">{email}</p>
      <Button
        primary
        buttonText={"VIEW LOG"}
        clickFunction={() => {
          clickView(id);
        }}
      />
      <Button
        buttonText={"DELETE"}
        clickFunction={() => {
          clickDel(id);
        }}
      />
    </div>
  );
}
