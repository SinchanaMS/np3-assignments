// You have a list of items on the page. Create two buttons to sort them by price, one in asc order, and the other in desc order.

import { useReducer } from "react";
import { initialData } from "./database/data";

export default function NP3sixQ1() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Ascending":
        return [...state].sort((a, b) => a.price - b.price);
      case "Descending":
        return [...state].sort((a, b) => b.price - a.price);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <div>
      <button onClick={() => dispatch({ type: "Ascending" })}>
        Sort by: Asc{" "}
      </button>
      <button onClick={() => dispatch({ type: "Descending" })}>
        Sort by: Desc{" "}
      </button>
      <ol>
        {state.map((data) => (
          <li>
            {data.item} - ${data.price}
          </li>
        ))}
      </ol>
    </div>
  );
}
// time taken: 10mins
