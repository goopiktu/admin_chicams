import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const { data: orders, loading } = useFetch("/api/orders");

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>All Orders</h2>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                <p>Order {index + 1}:</p>
                <p>First Name: {order.fname}</p>
                <p>Last Name: {order.lname}</p>
                <p>Contact Number: {order.contactNo}</p>
                <p>Mode: {order.mode}</p>
                <p>Date Ordered: {order.dateOrdered}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
