import React, { useContext, useState } from "react";
import  {ShopContextWithCustumHook}  from '../../context/shopContextWithCustumHook'
import ShopContextWithCustumHookProvider from "../../context/shopContextWithCustumHook";
// import { ShopContext } from "../../context/shopContext";

const ProductClothes = (props) => {
  const { id, productName, price, productImage } = props.data;

  const {cartItems, addToCart, removeFromCart } = useContext(ShopContextWithCustumHook);
  const isInCart =cartItems?.some((item)=>item.id ===id)
  return (
    <div className="col-3 "  >   
      <img src={productImage} className="w-100 h-50 rounded-circle"></img>
      <h5>{productName}</h5>
      <p>Price:{price}$</p>
      <button className="btn btn-info btn-sm" onClick={()=>addToCart(id)}>+</button>
      <span className="mx-1">{cartItems?.filter((row)=>row.id ===id)[0]?.count} </span>
      { isInCart && <button className="btn btn-info btn-sm" onClick={()=>removeFromCart(id)}>-</button>}
    </div>
  );
};
export default ProductClothes;
