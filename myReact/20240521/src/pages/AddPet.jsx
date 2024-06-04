/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Button } from "../components/Button";
import "../styles/petAdd.css";
import { useData } from "../hooks/useData";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useGeneralContext } from "../contexts/useContext";

export function AddPet() {
  const { addData } = useData("pets");
  const navigate = useNavigate();
  const myGenContext = useGeneralContext();

  useEffect(() => {
    if (myGenContext.petDate !== "petDate") {
      let date = new Date(myGenContext.petDate);
      let milisecs = date.getTime();

      myGenContext.dispatch({
        type: "NEWDOB",
        newDOB: milisecs,
      });
    }
  }, [myGenContext.petDate]);

  function handleChange(value, actionType, action) {
    console.log(value);
    myGenContext.dispatch({
      type: actionType,
      [action]: value,
    });
  }

  function createPet() {
    addData({
      name: myGenContext.petName,
      dob: myGenContext.petDate,
      client_email: myGenContext.petOwnerEmail,
    });
  }

  return (
    <div className="addFormWrap">
      <form
        className="addForm"
        onSubmit={(event) => {
          event.preventDefault();
          createPet();
          navigate("/");
        }}
      >
        <Input
          type={"text"}
          name={"petName"}
          label={"Pet name:"}
          handleChange={handleChange}
          actionType="NEWPETNAME"
          action="newPetName"
        />
        <Input
          type={"date"}
          name={"birthday"}
          label={"Date of birth:"}
          handleChange={handleChange}
          actionType="NEWDOB"
          action="newDOB"
        />
        <Input
          type={"email"}
          name={"ownerEmail"}
          label={"Owner's email:"}
          handleChange={handleChange}
          actionType="NEWEMAIL"
          action="newOwnerEmail"
        />
        <Button primary type="submit" buttonText={"Add pet"} />
      </form>
    </div>
  );
}
