// Here is a list of items. Add a remove button for every item. With every click of the remove button, remove one item from the list.

// Q3
// Extension of question02 - after removing an item, show a "undo remove" button. On clicking this button, add back the item that was removed and hide this "undo remove" button.

import { useState } from "react";
import { items } from "./database/items";

export default function NP3threeQ2Q3() {
  const [itemsList, setItemsList] = useState(items);
  const [deletedList, setDeletedList] = useState([]);
  const removeItem = (item) => {
    setItemsList(itemsList.filter((eachItem) => eachItem.id !== item.id));
    setDeletedList((prev) => [...prev, { id: item.id, item: item.item }]);
  };

  const undoDelete = () => {
    const deletedItem = deletedList.pop();
    setDeletedList(deletedList.filter((item) => item.id !== deletedItem.id));
    setItemsList((prev) => [...prev, deletedItem]);
  };

  return (
    <div>
      {deletedList.length > 0 && <button onClick={undoDelete}>Undo</button>}
      <ul className="items-list">
        {itemsList.map((item) => (
          <li key={item.id}>
            <p>{item.item}</p>
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// time taken = 5mins
// time taken for 3rd question = 7mins
