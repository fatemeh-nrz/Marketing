import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { PRODUCTSMOBILE } from "../../data/products";
import Product from "./product";
import React from "react";

const Mobile = () => {
  return (
    <React.Fragment>
      <h1>Mobile</h1>
      <div className="row">
        {PRODUCTSMOBILE.map((productsdata) => {  
            // ارسال پراپس به کامپوننت <Product/>
         return <Product key={productsdata.id} data={productsdata}  />; 
         // ارسال پراپس به کامپوننت <Product/>

        })}
      </div>
    </React.Fragment>
  );
};
export default Mobile;
