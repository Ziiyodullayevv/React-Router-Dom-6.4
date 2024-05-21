import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div>
      <h1>My Products Page</h1>

      <ul>
        <li>
          <Link to={"id"}>Product 1</Link>
        </li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  );
};

export default ProductsPage;
