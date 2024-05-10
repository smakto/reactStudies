function Task({
  taskId,
  taskName,
  doneStatus,
  handleDelete,
  handleChange,
  handleEdit,
  editPlaceholder,
}) {
  return (
    <div
      className="taskContainer"
      onDoubleClick={() => {
        handleEdit();
        editPlaceholder(taskId);
      }}
    >
      <p className={doneStatus}>{taskName}</p>
      <div className="buttonContainer">
        <button
          className="doneButton"
          onClick={() => {
            handleChange(taskId);
          }}
        >
          <i className="fa-solid fa-check fa-xl checkMark"></i>
        </button>

        <button
          className="trashContainer"
          onClick={() => {
            handleDelete(taskId);
          }}
        >
          <i className="fa-solid fa-trash-can fa-xl trash"></i>
        </button>
      </div>{" "}
    </div>
  );
}

export default Task;
