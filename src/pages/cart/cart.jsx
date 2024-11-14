import React, { useContext } from "react";
import { PRODUCTSCLOTHES } from "../../data/products";
// import { ShopContext } from "../../context/shopContext";
import ShopContextWithCustumHookProvider, { ShopContextWithCustumHook } from "../../context/shopContextWithCustumHook";
import ProductClothes  from "../clothes/ProductClothes";

const Cart = () => {
  const { cartItems ,resetCart } = useContext(ShopContextWithCustumHook);
  return (
    <React.Fragment>
      <h1>Your Cart Item</h1>
     
      <div className="row">
        {PRODUCTSCLOTHES.map((p) => {
          if (cartItems?.some((i) => i.id ===p.id && i.count > 0)){
            return <ProductClothes data={p} />;}
        })}
       
       
      </div>
      <button className=" btn btn-danger m-3" onClick={resetCart}>Reset-Cart</button>
    </React.Fragment>
  );
};
export default Cart;
