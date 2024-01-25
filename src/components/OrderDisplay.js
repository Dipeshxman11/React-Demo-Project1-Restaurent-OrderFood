// OrderDisplay.js

import React from "react";

const OrderDisplay = ({ orders, setOrders }) => {
  const tableNumbers = ["Table 1", "Table 2", "Table 3", "Table 4", "Table 5"];

  const handleDelete = (orderId) => {
    // Remove order from localStorage
    localStorage.removeItem(orderId);
    
    // Remove order from state
    const updatedOrders = orders.filter((order) => order.orderId !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div>
      <h3>Orders</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {tableNumbers.map((table) => (
          <div key={table} style={{ marginRight: "70px", marginLeft: "70px" }}>
            <h4>{table}</h4>
            {orders
              .filter((order) => order.table === table)
              .map((order) => (
                <div key={order.orderId}>
                  <p>Order ID: {order.orderId}</p>
                  <p>Description: {order.description}</p>
                  <p>Price: {order.price}</p>
                  <button onClick={() => handleDelete(order.orderId)}>Delete</button>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDisplay;
