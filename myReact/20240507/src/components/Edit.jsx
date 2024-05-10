import { useState } from "react";

function Edit({ editClass, placeholder, changeName, closeForm }) {
  const [editInput, setEditInput] = useState([]);

  return (
    <form className={editClass}>
      <input
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

          changeName = changeName(editInput);
          setEditInput("");
          closeForm = closeForm();
        }}
      >
        Edit
      </button>
    </form>
  );
}

export default Edit;
