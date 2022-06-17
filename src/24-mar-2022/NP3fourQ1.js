//Take 2 inputs from the user. A lower price, and an upper price. List only the products which fall in between the lower and upper price range.

import { useEffect, useState } from "react";
import { productItems } from "./database/productItems";

export default function NP3fourQ1() {
  const [priceRange, setPriceRange] = useState({});
  const [productsList, setProductsList] = useState(productItems);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  const filterData = (priceRange) => {
    const filteredList = productItems.filter(
      (item) =>
        item.price <= priceRange?.upperPrice &&
        item.price >= priceRange?.lowerPrice
    );
    setProductsList(filteredList);
  };

  useEffect(() => filterData(priceRange), [priceRange]);

  return (
    <div>
      <input
        type="number"
        placeholder="lower price"
        value={priceRange?.lowerPrice}
        name="lowerPrice"
        onChange={inputHandler}
      />
      <input
        type="number"
        placeholder="upper price"
        value={priceRange?.upperPrice}
        name="upperPrice"
        onChange={inputHandler}
      />
      {productsList.map((item) => (
        <p key={item.id}>
          {item.item} - $ {item.price}
        </p>
      ))}
    </div>
  );
}

// time taken: 15mins
