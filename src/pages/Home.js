import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  //navigate:
  const navigate = useNavigate();
  const navigateHandler = () => navigate("products");
  return (
    <div>
      <h1>My Home Page</h1>
      <p>
        <Link to="products">Go to Products</Link>
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </div>
  );
};

export default HomePage;
