import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <div>
      <h1>Product Detail!</h1>
      <p>{params.productId} </p>
      <p>
        {/*relative = 'path' berilganda path bitta orqaga qaytadi aks holda rootga chunki defoult holatda relative ='route' turgan boladi*/}
        <Link to={".."} relative={"path"}>
          Back
        </Link>
      </p>
    </div>
  );
};

export default ProductDetailPage;
