import React from "react";
import whiteshirt from "../../images/white-front-sweater.jpg";
import greenshirt from "../../images/green-front-sweater.jpg";
const ProductComponents = ({ id, title, imageurl, designer, tags, price }) => {
  //background choose
  function isOdd(num) {
    return num % 2;
  }
  const shirtbg = isOdd(id) ? whiteshirt : greenshirt;

  return (
    <div className="product">
      <div
        className="product-img"
        style={{ backgroundImage: `url(${shirtbg})` }}>
        <img className="painting" src={imageurl} alt="" />
      </div>

      <div className="product-info">
        <div className="text">
          <h2>Title:{title}</h2>
          <h4>By: {designer}</h4>
          <p>{tags}</p>
        </div>
        <h1>€ {price}</h1>
      </div>
    </div>
  );
};

export default ProductComponents;
