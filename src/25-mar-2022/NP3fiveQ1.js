// Q1
// Make a page that takes the following 2 inputs separately
// 1. Category name as a string (If user adds a category it should be added in the category dropdown)
// 2. Then it will also take 2 inputs at once,
// product name and its category (With the dropdown containing the added categories)
// Product name will be string and category input type will be a dropdown list of the categories user-entered earlier
// Then save the data and render the list category wise

// Q3
// Extending the first question, add delete functionality as such
// if the user clicks on any item it gets deleted
// and if the user clicks on any category, all the items within the category and that category itself gets deleted

import { useState } from "react";
import { productsData } from "./database/products";

export default function NP3fiveQ1() {
  const [prodList, setProdList] = useState(productsData);

  const [category, setCategory] = useState("");

  const [product, setProduct] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Fruit");

  const inputHandler = (e) => {
    setCategory(e.target.value);
  };

  const addCategory = () => {
    const categoryExists = prodList.some((prod) => prod.category === category);
    categoryExists
      ? alert("category already exists")
      : setProdList((prod) => [...prod, { category: category, products: [] }]);
  };

  const productHandler = (e) => {
    setProduct(e.target.value);
  };

  const addToList = (e) => {
    setProdList(
      prodList.map((prod) =>
        prod.category === e
          ? { ...prod, products: [...prod.products, product] }
          : prod
      )
    );
  };

  const deleteProduct = (product) => {
    setProdList(
      prodList.map((item) => ({
        ...item,
        products: item.products.filter((eachProduct) => eachProduct !== product)
      }))
    );
  };

  const deleteCategory = (prod) => {
    setProdList(
      prodList.filter((product) => product.category !== prod.category)
    );
  };
  return (
    <div>
      <input value={category} onChange={inputHandler} />
      <button onClick={addCategory}>Add Category</button>

      <input value={product} onChange={productHandler} />
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        {prodList.map((prod) => (
          <option key={prod.category}>{prod.category}</option>
        ))}
      </select>
      <button onClick={() => addToList(selectedCategory)}>Add Product</button>

      {prodList.map((prod) => (
        <div key={prod.category}>
          <h1 onClick={() => deleteCategory(prod)}>{prod.category}</h1>
          <ul>
            {prod.products.map((product) => (
              <li key={product} onClick={() => deleteProduct(product)}>
                {product}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
// time taken: 19mins
// time taken: 10mins
