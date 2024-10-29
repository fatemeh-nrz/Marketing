import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Product from "./product";
import { PRODUCTSGLASSES } from "../../data/products";
const Glasses = () => {
  return (
    <React.Fragment>
      <h1>Glasses</h1>
      <div className="row">
        {PRODUCTSGLASSES.map((productdata) => {
          return <Product key={productdata.id} data={productdata} />;
        })}

      </div>
    </React.Fragment>
  );
};
export default Glasses;
