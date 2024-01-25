// Form.js

import React, { useState } from "react";
import OrderDisplay from "./OrderDisplay";
// import "./Form.css";

const Form = () => {
  const [input, setInput] = useState({
    orderId: "",
    description: "",
    price: "",
    table: "Table 1",
  });

  const [orders, setOrders] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newOrder = {
      ...input,
      orderId: input.orderId || Date.now(), // Use current time if orderId is not provided
    };

    localStorage.setItem(
      newOrder.orderId.toString(),
      JSON.stringify({
        description: newOrder.description,
        price: newOrder.price,
        table: newOrder.table,
      })
    );

    setOrders([...orders, newOrder]);
    setInput({
      orderId: "",
      description: "",
      price: "",
      table: "Table 1",
    });
  };

  return (
    <>
      <div style={{ display: "flex", margin: "10px" }}>
        <h3>Order Form</h3>
        <form style={{ display: "flex", margin: "10px", padding: "10px" }}>
          <input
            type="text"
            placeholder="Order ID"
            value={input.orderId}
            onChange={(e) => setInput({ ...input, orderId: e.target.value })}
          />
          <input
            type="text"
            placeholder="Order Details"
            value={input.description}
            onChange={(e) => setInput({ ...input, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Price"
            value={input.price}
            onChange={(e) => setInput({ ...input, price: e.target.value })}
          />
          <select
            name=""
            id=""
            value={input.table}
            onChange={(e) => setInput({ ...input, table: e.target.value })}
          >
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
            <option value="Table 4">Table 4</option>
            <option value="Table 5">Table 5</option>
          </select>
          <button type="submit" onClick={submitHandler}>
            Order
          </button>
        </form>
      </div>

      <OrderDisplay orders={orders} setOrders={setOrders} />
    </>
  );
};

export default Form;
