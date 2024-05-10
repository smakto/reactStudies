import { useState } from "react";

function SubmitField({ addTask, generateID, isDone }) {
  const [inputValue, setInput] = useState([]);

  const [taskIdBank, setId] = useState(Math.floor(Math.random() * 10000));

  function handleInput() {
    setInput({
      taskId: taskIdBank,
      name: event.target.value,
      done: isDone,
    });
  }

  return (
    <form>
      <input
        id="taskInputField"
        type="text"
        placeholder="Enter Task"
        onChange={handleInput}
      ></input>
      <button
        type="submit"
        onClick={() => {
          event.preventDefault();
          addTask(inputValue);
          document.querySelector("#taskInputField").value = "";
          setId(generateID);
        }}
      >
        Add
      </button>
    </form>
  );
}

export default SubmitField;
