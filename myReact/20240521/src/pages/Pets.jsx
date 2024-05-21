import "../styles/pets.css";
import { useData } from "../hooks/useData";
import { Button } from "../components/Button";
import { PageHead } from "../components/PageHead";
import { useState, useEffect } from "react";

export function Pets() {
  const pets = useData("pets");
  const [petsList, setNewPetsList] = useState([]);

  useEffect(() => {
    setNewPetsList(pets);
  }, [pets]);

  function handleDelete(id) {
    petsList.map((items) => {
      if (items.id === id) {
        items.archived = 1;
      }
    });
    setNewPetsList([...petsList]);
  }

  return (
    <>
      <PageHead
        pageHead={"Pet List"}
        buttonField={
          <div className="pageHeadButton">
            <Button buttonText={"Add Pet"} primary />
          </div>
        }
      />
      <div className="petsContainer">
        {petsList.map((item) => {
          if (item.archived != 1)
            return (
              <div key={item.id} className="petCard">
                <h4>{item.name}</h4>
                <p className="petDob">
                  Born: {new Date(item.dob).getFullYear()}
                </p>
                <p className="ownerEmail">{item.client_email}</p>
                <Button primary buttonText={"VIEW LOG"}></Button>{" "}
                <Button
                  buttonText={"DELETE"}
                  clickFunction={() => {
                    handleDelete(item.id);
                  }}
                ></Button>
              </div>
            );
        })}
      </div>
    </>
  );
}
