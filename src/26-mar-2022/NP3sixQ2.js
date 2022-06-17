// You have a list of items. Each item has an id, a name, and a price. You have to create 2 inputs. One input will take the id, the other will take a price. Use a submit button, to update the price of the id which is provided in the input fields.

import { useState } from "react";
import { initialData } from "./database/data";

export default function NP3sixQ2() {
  const [updatedPrice, setUpdatedPrice] = useState({});

  const [productList, setProductList] = useState(initialData);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedPrice((prev) => ({ ...prev, [name]: value }));
  };

  const updatePriceHandler = (e) => {
    e.preventDefault();
    setProductList(
      productList.map((prod) =>
        prod.item === updatedPrice.item
          ? { ...prod, price: updatedPrice.price }
          : prod
      )
    );
  };

  console.log(updatedPrice);
  return (
    <div>
      <form onSubmit={updatePriceHandler}>
        {/* <input
          type="number"
          name="id"
          value={updatedPrice?.id}
          onChange={inputHandler}
        /> */}
        <select name="item" onChange={inputHandler}>
          <option selected disabled>
            Choose item
          </option>
          {productList.map((prod) => (
            <option value={prod?.item}>{prod.item}</option>
          ))}
        </select>
        <input
          type="number"
          name="price"
          value={updatedPrice?.price}
          onChange={inputHandler}
        />
        <button>Submit</button>
      </form>

      <ul>
        {productList.map((item) => (
          <li>
            id: {item.id} -- {item.item} : ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
// time taken: 10mins
// time taken: 5mins
