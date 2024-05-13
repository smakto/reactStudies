import { useState } from "react";

function Edit({ editClass, placeholder, changeName, closeForm }) {
  const [editInput, setEditInput] = useState([]);

  return (
    <form className={editClass}>
      <input
        className="editInput"
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          setEditInput(e.target.value);
        }}
      ></input>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          changeName(editInput);
          document.querySelector(".editInput").value = "";
          closeForm();
        }}
      >
        Edit
      </button>
    </form>
  );
}

export default Edit;
