import React from "react";
import { PRODUCTSSCARF } from "../../data/products";
import Product from "./products";
const Scarf = () => {
  return (
    <React.Fragment>
      <h1>Scarf</h1>
      <div className="row">
        {PRODUCTSSCARF.map((productsdata) => {
          return <Product key={productsdata} data={productsdata} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default Scarf;
