import React, { useState } from "react";
import Input from "@mui/joy/Input";
export default function InputItem(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  function handleTitle(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleAmount(event) {
    const value = event.target.value;
    setAmount(value);
  }

  function addItem(event) {
    var status = 1;
    var value;
    if (amount < 0) {
      value = amount * -1;
      status = 0;
    } else {
      value = amount * 1;
      status = 1;
    }

    props.addItem({ title: title, amount: value, status: status });

    event.preventDefault();
    setTitle("");
    setAmount("");
  }
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form id="form">
        <p className="formHeading">Text</p>
        <Input
          color="neutral"
          placeholder="Enter Text"
          size="sm"
          variant="plain"
          id="text"
          onChange={handleTitle}
          value={title}
        />
        <p className="formHeading">
          Amount (negative - expense, positive - income)
        </p>
        <Input
          color="neutral"
          placeholder="Enter Amount"
          size="sm"
          variant="plain"
          id="amount"
          onChange={handleAmount}
          value={amount}
        />
        <button className="button" onClick={addItem}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}
