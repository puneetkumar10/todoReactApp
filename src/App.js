import React, { useState } from "react";
import "./App.css";
import AppItem from "./AppItem";

export default function App() {
  let [itemList,setListItem] = useState(["item 1", "item 2", "item 3"]);

  function deleteItem(itemIndex){
    let list=[...itemList];
    list.splice(itemIndex,1);
    setListItem(list);
  }
  return (
    <React.Fragment>
      <div>
        <h1>TODO LIST</h1>
        <ul>
          {itemList.map((item,i) => {
            return <AppItem key={i} name={item.toUpperCase()} delete={deleteItem} idx={i}></AppItem>;
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}
