import React from "react";
import './App.css';

export default function AppItem(props) {
  return (
    <li>
      <span className="task-priority">{props.name}</span>
      <div className="task-design">
        <button> Priority </button>
        <button onClick={()=>{props.delete(props.idx)}}> Delete </button>
      </div>
    </li>
  );
}
