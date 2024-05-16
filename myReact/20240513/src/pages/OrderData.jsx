import { useParams } from "react-router-dom";
import { useOrdersData } from "../hooks/getOrdersData";
import { useEffect, useState } from "react";

export function OrderData() {
  const [ordersList] = useOrdersData();
  const [singleOrderData, setSingleOrderData] = useState([]);
  const params = useParams();

  useEffect(() => {
    let orderData = ordersList.find((items) => items.id === params.id);
    setSingleOrderData(orderData);
    console.log("Order data", orderData);
  }, [ordersList, params]);

  console.log(singleOrderData);

  return (
    singleOrderData && (
      <div className="orderInfoDiv">
        <h4>Order ID:{singleOrderData.id}</h4>
        <h4>People:{singleOrderData.peopleCount}</h4>
        <h4>Check: ${singleOrderData.checkSum}</h4>
      </div>
    )
  );
}
