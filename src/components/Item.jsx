import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function Item(props) {
  function deleteItem() {
    props.onDelete(props.id);
  }

  return (
    <li className={props.status ? "plus" : "minus"}>
      {props.title}
      <span>
        {props.status === 0 && "-"}${props.amount}
      </span>
      <button className="delete-btn" onClick={deleteItem}>
        <DeleteForeverIcon />
      </button>
    </li>
  );
}
