import { useEffect, useState } from "react";
import "./styles/style.css";
import SubmitField from "./SubmitField";
import Task from "./Task";
import Edit from "./Edit";
import useSearch from "./useSearch";

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
      {" "}
      <h3>You have {taskList.length} tasks</h3>
      <div className="allTasks">
        {taskList.map((tasks, index) => {
          return (
            <>
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
            </>
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
      <SearchField arr={taskList} />
    </div>
  );
}

function SearchField({ arr }) {
  const [list, listevent] = useSearch(arr);
  {
    console.log(list);
  }
  return (
    <>
      <input type="text" onChange={listevent} />
      {list.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </>
  );
}

export default ToDoApp;
