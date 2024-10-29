import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { HOUSEHOLDAPPLIANCES } from "../../data/products";
import Product from "./product";
import React from "react";
const Home = () => {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <div className="row">
        {HOUSEHOLDAPPLIANCES.map((productdata) => {
          return <Product key={productdata.id} data={productdata} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default Home;
