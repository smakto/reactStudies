// (priima stulpelių pavadinimus ir duomenis bei handleClick funkcija paspaudus ant eilutės).

import { useState, useEffect } from "react";
import "../styles/table.css";
import { useOrdersData } from "../hooks/getOrdersData";

export function Table() {
  const [currentOrders, setOrders] = useOrdersData();

  const [deleteToggle, setDeleteToggle] = useState(false);
  const [clickedID, setClickedID] = useState("");

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(currentOrders));
  }, [currentOrders]);

  function handleClick(id) {
    setClickedID(id);
    setDeleteToggle(deleteToggle ? false : true);
  }

  function handleDelete() {
    setOrders(currentOrders.filter((items) => items.id !== clickedID));
    setDeleteToggle(false);
  }

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Table ID</th>
            <th>Number of guests</th>
            <th>Check sum</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((items) => {
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
          />
        </tbody>
      </table>
    </main>
  );
}

function DeleteConfirmation({ delClass, tableID, handleDelete }) {
  return (
    <tr className={delClass}>
      <td colSpan={3}>
        Delete table ID: {tableID}?{" "}
        <button onClick={handleDelete}>Delete</button>
        <button>Cancel</button>
      </td>
    </tr>
  );
}
