import { useState } from "react";

function Edit({ editClass, placeholder }) {
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
          console.log(editInput);
          //   editTask - Pakeisti task pavadinimą
          //
        }}
      >
        Edit
      </button>
    </form>
  );
}

export default Edit;
