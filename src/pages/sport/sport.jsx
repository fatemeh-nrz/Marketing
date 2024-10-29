import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { PRODUCTSSPORT } from "../../data/products";
import Product from "./product";
const Sports = () => {
  return (
    <React.Fragment>
      <h1>Sports</h1>
      <div className="row">
        {PRODUCTSSPORT.map((productdata) => {
          return <Product key={productdata.id} data={productdata} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default Sports;
