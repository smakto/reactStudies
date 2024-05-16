// (priima stulpelių pavadinimus ir duomenis bei handleClick funkcija paspaudus ant eilutės).

import { useState } from "react";
import "../styles/table.css";
import { useOrdersData } from "../hooks/getOrdersData";

export function Table() {
  const [ordersList, setOrders] = useOrdersData();

  const [deleteToggle, setDeleteToggle] = useState(false);
  const [clickedID, setClickedID] = useState("");

  function handleClick(id) {
    setClickedID(id);
    setDeleteToggle(deleteToggle ? false : true);
  }
  // Spaudziant ant kito atidaro kito ID

  function handleDelete() {
    setOrders(ordersList.filter((items) => items.id !== clickedID));
    closeDelReq();
  }

  function closeDelReq() {
    setDeleteToggle(false);
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
          closeDel={closeDelReq}
        />
      </tbody>
    </table>
  );
}

function DeleteConfirmation({ delClass, tableID, handleDelete, closeDel }) {
  return (
    <tr className={delClass}>
      <td colSpan={3}>
        Delete table ID: {tableID}?{" "}
        <button onClick={handleDelete}>Delete</button>
        <button onClick={closeDel}>Cancel</button>
      </td>
    </tr>
  );
}
