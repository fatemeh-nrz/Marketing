import React, { useContext } from "react";
import { PRODUCTSCLOTHES } from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import Product from "../clothes/product";

const Cart =()=>{
    const{cartItems}=useContext(ShopContext);
    return(
        <React.Fragment>
        <h1>Your Cart Item</h1>
        <div className="row">
            {PRODUCTSCLOTHES.map((p)=>{
if(cartItems.some((i)=>i.id===p.id && i.count >0))
    return <Product data={p} />
            })}
        </div>
        </React.Fragment>
    )
    }
    export default Cart ;