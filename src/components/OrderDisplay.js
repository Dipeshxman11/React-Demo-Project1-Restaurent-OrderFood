import React from "react";

const OrderDisplay = ({ orders }) => {
  // Define a set of predefined table numbers
  const tableNumbers = ["Table 1", "Table 2", "Table 3", "Table 4", "Table 5"];

  // Create an object to group orders by table number
  const ordersByTable = {};
  orders.forEach((order) => {
    if (!ordersByTable[order.table]) {
      ordersByTable[order.table] = [];
    }
    ordersByTable[order.table].push(order);
  });

  return (
    <div>
      <h3>Orders</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {tableNumbers.map((table) => (
          <div key={table} style={{ marginRight: "70px", marginLeft : "70px" }}>
            <h4>{table}</h4>
            {ordersByTable[table] ? (
              ordersByTable[table].map((order) => (
                <div key={order.orderId}>
                  <p>Order ID: {order.orderId}</p>
                  <p>Description: {order.description}</p>
                  <p>Price: {order.price}</p>
                </div>
              ))
            ) : (
              <p>No orders for {table}.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDisplay;