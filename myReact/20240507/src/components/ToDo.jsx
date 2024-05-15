import { useEffect, useState } from "react";
import "./styles/style.css";
import SubmitField from "./SubmitField";
import Task from "./Task";
import Edit from "./Edit";
import { useSearch } from "./useSearch";

function ToDoApp() {
  const [taskList, setNewList] = useState([]);
  const [formClass, setFormClass] = useState("hiddenEdit");
  const [editPlaceholder, setPlaceholder] = useState("");
  const [nameID, setID] = useState("");

  const [list, handleInputChange] = useSearch(taskList);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.length > 0) {
      setNewList(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(taskList));
  }, [taskList]);

  function addTask(task) {
    setNewList([...taskList, task]);
  }

  function handleDelete(ID) {
    setNewList(taskList.filter((tasks) => tasks.taskId != ID));
  }

  function changeStatus(idChange) {
    if (taskList.length > 0) {
      taskList.forEach((items) => {
        if (items.taskId === idChange) {
          items.done = !items.done;
        }
      });
    }

    setNewList([...taskList]);
  }

  function handleEdit() {
    setFormClass(formClass === "hiddenEdit" ? "shownEdit" : "hiddenEdit");
  }

  function setEditPlaceholder(id) {
    let result = taskList.find((items) => items.taskId === id);
    setPlaceholder(result.name);
    setID(id);
  }

  function changeName(newName) {
    taskList.forEach((items) => {
      if (items.taskId === nameID) {
        items.name = newName;
      }
    });
    setNewList([...taskList]);
  }

  return (
    <div>
      <h3>You have {taskList.length} tasks</h3>
      <div className="allTasks">
        {list.map((task) => {
          return (
            <Task
              key={task.taskId}
              taskId={task.taskId}
              taskName={task.name}
              handleDelete={handleDelete}
              handleChange={changeStatus}
              handleEdit={handleEdit}
              editPlaceholder={setEditPlaceholder}
              doneStatus={task.done ? "doneTask" : "false"}
            />
          );
        })}
      </div>
      <SubmitField
        addTask={addTask}
        generateID={Math.floor(Math.random() * 10000)}
        isDone={false}
      />
      <Edit
        editClass={formClass}
        placeholder={editPlaceholder}
        changeName={changeName}
        closeForm={handleEdit}
      />
      <SearchField handleInputChange={handleInputChange} />
    </div>
  );
}

function SearchField({ handleInputChange }) {
  return (
    <div className="searchDiv">
      <input type="text" onChange={handleInputChange} placeholder="Search" />
      <button
        className="searchButton"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Search
      </button>
    </div>
  );
}

export default ToDoApp;
