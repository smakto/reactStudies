import { useState, useEffect } from "react";

export function Home() {
  const [currentOrders, setCurrentOrders] = useState([]);

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("orders"));
    storedData ? setCurrentOrders(storedData) : setCurrentOrders([]);
  }, []);

  return (
    <main>
      {currentOrders.map((items) => {
        return (
          <div
            key={items.id}
          >{`Order ID: ${items.id}. Headcount: ${items.peopleCount}. Total order sum ${items.checkSum}`}</div>
        );
      })}
    </main>
  );
}
