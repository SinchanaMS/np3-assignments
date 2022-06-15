import { useState } from "react";
import { brands } from "./database/brands";

import "../styles.css";

// - Your challenge is to build a brand filter for products.
// - The parameters for the brand filter, i.e, brand names should appear when you search for the brand name in an input box

export default function Q1() {
  const [searchFor, setSearchFor] = useState("");

  const brandsList = brands.filter((brand) =>
    brand.brandName.toLowerCase().includes(searchFor?.toLowerCase())
  );

  return (
    <div>
      <input value={searchFor} onChange={(e) => setSearchFor(e.target.value)} />
      <ul>
        {brandsList.map((brand) => (
          <li key={brand.id}>{brand.brandName}</li>
        ))}
      </ul>
    </div>
  );
}

// time taken: 8mins.
