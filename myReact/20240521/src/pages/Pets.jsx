import "../styles/pets.css";
import { useData } from "../hooks/useData";
import { Button } from "../components/Button";
import { PageHead } from "../components/PageHead";
import { Link, useNavigate } from "react-router-dom";
import { SearchField } from "../components/SearchField";
import { useSearch } from "../hooks/useSearch";

function searchFunct(element, inputValue) {
  return element.name.toLowerCase().includes(inputValue.toLowerCase());
}

export function Pets() {
  const { dataSet, deleteByID } = useData("pets");
  const navigate = useNavigate();

  function goToLog(id) {
    navigate(`/logs/${id}`);
  }

  const [data, handleInput] = useSearch(dataSet, searchFunct);

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
      <SearchField handleInput={handleInput} />
      <div className="petsContainer">
        {data.map((item) => {
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
