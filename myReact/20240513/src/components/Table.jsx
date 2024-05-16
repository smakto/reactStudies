import { useState } from "react";
import "../styles/table.css";
import { useOrdersData } from "../hooks/getOrdersData";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export function Table() {
  const [ordersList, setOrders] = useOrdersData();
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [clickedID, setClickedID] = useState("");
  const navigate = useNavigate();

  function handleClick(id) {
    setClickedID(id);
    setDeleteToggle(true);
  }

  function handleDelete() {
    setOrders(ordersList.filter((items) => items.id !== clickedID));
    closeDeleteRequest();
  }

  function closeDeleteRequest() {
    setDeleteToggle(false);
  }

  function handleDoubleClick(id) {
    navigate(`/guests/${id}`);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Table ID</th>
          <th>Number of guests</th>
          <th>Check sum</th>
        </tr>
      </thead>
      <tbody>
        {ordersList.map((items) => {
          return (
            <tr
              key={items.id}
              onClick={() => {
                handleClick(items.id);
              }}
              onDoubleClick={() => {
                handleDoubleClick(items.id);
              }}
            >
              <td>{items.id}</td>
              <td>{items.peopleCount}</td>
              <td>{items.checkSum}</td>
            </tr>
          );
        })}
        <DeleteConfirmation
          delClass={deleteToggle ? "delConfirmationON" : "delConfirmationOFF"}
          tableID={clickedID}
          handleDelete={handleDelete}
          closeDel={closeDeleteRequest}
        />
      </tbody>
    </table>
  );
}

function DeleteConfirmation({ delClass, tableID, handleDelete, closeDel }) {
  return (
    <tr className={delClass}>
      <td colSpan={3}>
        Delete table: {tableID}?{" "}
        <Button text="Delete" clickEvent={handleDelete} />
        <Button text="Cancel" clickEvent={closeDel} />
      </td>
    </tr>
  );
}
