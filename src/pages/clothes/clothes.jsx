import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { PRODUCTSCLOTHES } from "../../data/products";
import Product from "./product";
const Cloths = () => {
  return (
    <React.Fragment>
      <h1 >Clothes</h1>
      <div className="row">
        {PRODUCTSCLOTHES.map((dataproduct) => {
          return <Product key={dataproduct.id} data={dataproduct} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default Cloths;
