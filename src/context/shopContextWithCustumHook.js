import React from "react";
import  {createContext ,useContext} from "react";
import CartHook from "../hook/useCart"

export const ShopContextWithCustumHook = createContext({
  cartItems: null,
  addToCart: () => {},
  removeFromCart: () => {},
  resetCart:()=>{}
});
 const ShopContextWithCustumHookProvider = (props) => {    
  return (
    <ShopContextWithCustumHook.Provider value={CartHook()}>
      {props.children}
    </ShopContextWithCustumHook.Provider>
  );
};
export default ShopContextWithCustumHookProvider;
