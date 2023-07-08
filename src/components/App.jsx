import React, { useEffect, useState } from "react";
import Item from "./Item";
import Header from "./Header";
import InputItem from "./InputItem";

export default function App() {
  const [list, setList] = useState([]);
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(0);

  function addItem(addItem) {
    setList((prevValues) => {
      return [
        ...prevValues,
        {
          title: addItem.title,
          amount: addItem.amount,
          status: addItem.status
        }
      ];
    });
  }

  useEffect(() => {
    let valuePlus = list.reduce(function (prev, current) {
      if (current.status === 1) {
        return prev + current.amount;
      } else {
        return prev;
      }
    }, 0);
    setPlus(valuePlus);
    let valueMinus = list.reduce(function (prev, current) {
      if (current.status === 0) {
        return prev + current.amount;
      } else {
        return prev;
      }
    }, 0);
    setMinus(valueMinus);
  }, [list]);
  useEffect(() => {}, [plus]);
  useEffect(() => {}, [minus]);

  function deleteItem(id) {
    setList((prevValues) => {
      return prevValues.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      <h2>Expense Tracker</h2>

      <Header plus={plus} minus={minus} sum={plus - minus} />
      <ul id="list" className="list">
        {list.map((item, index) => {
          return (
            <Item
              key={index}
              id={index}
              title={item.title}
              amount={item.amount}
              status={item.status}
              onDelete={deleteItem}
            />
          );
        })}
      </ul>
      <InputItem addItem={addItem} />
    </div>
  );
}
