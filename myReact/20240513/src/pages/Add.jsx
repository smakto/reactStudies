import "../styles/add.css";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { useOrdersData } from "../hooks/getOrdersData";

export function Add() {
  const [ordersList, setOrders] = useOrdersData();

  const [orderData, setNewOrderData] = useState(null);

  const [orderID, setNewID] = useState(null);
  const [peopleCount, setNewCount] = useState(null);
  const [checkSum, setNewSum] = useState(null);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(ordersList));
  }, [ordersList]);

  useEffect(() => {
    setNewOrderData({
      id: orderID,
      peopleCount: peopleCount,
      checkSum: checkSum,
    });
  }, [orderID, peopleCount, checkSum]);

  return (
    <main>
      <div className="addFormWrapper">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            ordersList.length > 0
              ? setOrders([...ordersList, orderData])
              : setOrders([orderData]);
            document.querySelectorAll("input").forEach.value = "";
          }}
        >
          <FormInput name="id" placeholder="Enter ID" setNewData={setNewID} />
          <FormInput
            name="peopleCount"
            placeholder="Number of people"
            setNewData={setNewCount}
          />
          <FormInput
            name="checkSum"
            placeholder="Enter check sum"
            setNewData={setNewSum}
          />
          <Button type="submit" text="Add" />
        </form>
      </div>
    </main>
  );
}

function FormInput({ name, placeholder, setNewData }) {
  return (
    <input
      type="number"
      name={name}
      placeholder={placeholder}
      onChange={(event) => {
        setNewData(event.target.value);
      }}
    ></input>
  );
}
