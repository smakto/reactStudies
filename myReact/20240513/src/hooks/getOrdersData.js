import { useState, useEffect } from "react";

export function useOrdersData() {
  const [ordersList, setOrders] = useState([]);

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("orders"));
    if (storedData && storedData.length) setOrders(storedData);
  }, []);

  return [ordersList, setOrders];
}
