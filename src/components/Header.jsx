import React from "react";
export default function Header(props) {
  return (
    <div className="container">
      <h4 className="balanceHeading">YOUR BALANCE</h4>
      <h1 id="balance">${props.sum}</h1>

      <div className="inc-exp-container">
        <div>
          <h4>INCOME</h4>
          <p id="money-plus" className="money plus">
            {props.plus}
          </p>
        </div>
        <div>
          <h4>EXPENSE</h4>
          <p id="money-minus" className="money minus">
            {props.minus}
          </p>
        </div>
      </div>
      <h3>History</h3>
    </div>
  );
}
