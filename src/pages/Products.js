import { Link } from "react-router-dom";
import React from "react";

const PRODUCTS = [
  { id: "p1", title: "Zarina" },
  { id: "p2", title: "Anna" },
  { id: "p3", title: "Adiba" },
];
const ProductsPage = () => {
  return (
    <div>
      <h1>My Products Page</h1>

      <ul>
        {PRODUCTS.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
