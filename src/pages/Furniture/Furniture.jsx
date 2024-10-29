import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { PRODUCTSFURNITURE } from "../../data/products";
import Product from "./product";
const Furniture = () => {
  return (
    <React.Fragment>
      <h1>Furniture</h1>
      <div className="row">
        {PRODUCTSFURNITURE.map((dataproduct) => {
          return <Product key={dataproduct.id} data={dataproduct} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default Furniture;
