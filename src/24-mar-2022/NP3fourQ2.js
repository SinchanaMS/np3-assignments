// You have a list of items with price and quantity. Create two buttons for each and every element in the data list. One will increment the quantity of the particular item, and one will decrement the quantity.. Show all details of the items on the page.

// Extension of question02 - show the total price at the end of the list which would be the sum of (price * quantity) for all items
import { useState } from "react";
import { productItems } from "./database/productItems";

export default function NP3fourQ2Q3() {
  const [prodList, setProdList] = useState(productItems);

  const incrementQuantity = (item) => {
    setProdList(
      prodList.map((prod) =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod
      )
    );
  };

  const decrementQuantity = (item) => {
    setProdList(
      prodList.map((prod) =>
        prod.id === item.id
          ? {
              ...prod,
              quantity: prod.quantity > 1 ? prod.quantity - 1 : prod.quantity
            }
          : prod
      )
    );
  };

  const totalPrice = prodList.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div>
      {prodList.map((item) => (
        <div key={item.id}>
          <p>
            {item.item} (${item.price})
          </p>
          <button onClick={() => decrementQuantity(item)}>-</button>
          {item.quantity}
          <button onClick={() => incrementQuantity(item)}>+</button>
        </div>
      ))}

      <p>Total price: {totalPrice}</p>
    </div>
  );
}
// time taken: 5mins 30secs
// time taken: 3mins
