import { useEffect, useState } from "react";
import "./styles/style.css";
import SubmitField from "./SubmitField";
import Task from "./Task";
import Edit from "./Edit";

function ToDoApp() {
  const [taskList, setNewList] = useState([]);
  const [formClass, setFormClass] = useState("hiddenEdit");
  const [editPlaceholder, setPlaceholder] = useState("");
  const [nameID, setID] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData.length > 0) {
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
      for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].taskId === idChange)
          taskList[i].done = !taskList[i].done;
      }
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
    console.log("result", id, result);
  }

  function changeName(newName) {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].taskId === nameID) taskList[i].name = newName;
    }
    setNewList([...taskList]);
  }

  return (
    <div>
      <h3>You have {taskList.length} tasks</h3>
      <div className="allTasks">
        {taskList.map((tasks, index) => {
          return (
            <Task
              key={index}
              taskId={tasks.taskId}
              taskName={tasks.name}
              handleDelete={handleDelete}
              handleChange={changeStatus}
              handleEdit={handleEdit}
              editPlaceholder={setEditPlaceholder}
              doneStatus={tasks.done ? "doneTask" : "false"}
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
    </div>
  );
}

export default ToDoApp;

/// Atidarius changeForm reikia, kad čia būtų ID.
