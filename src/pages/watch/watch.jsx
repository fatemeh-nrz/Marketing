import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { PRODUCTSWATCH } from "../../data/products";
import React from "react";
import Product from "./product";
const Watch = () => {
  return (
    <React.Fragment>
      <h1>Watch</h1>
      <div className="row">
        {PRODUCTSWATCH.map((productsdata) => {
          return <Product key={productsdata.id} data={productsdata} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default Watch;
