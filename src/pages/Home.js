import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>My Home Page</h1>
      <p>
        <Link to={"/products"}>Go to Products</Link>
      </p>
    </div>
  );
};

export default HomePage;
