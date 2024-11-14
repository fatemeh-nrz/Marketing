import { data } from "@remix-run/router";
import React, { useEffect } from "react";
import { useState } from "react";
const CartHook = () => {
  // در اینجا مقدار اولیه کارت ایتمس undefined است
  const [cartItems, setCartItems] = useState();
  useEffect(() => {
    const data = localStorage.getItem("CartItem_norozi");
    setCartItems(!!JSON.parse(data) ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    if (cartItems !== undefined)
      localStorage.setItem("CartItem_norozi", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    if (!cartItems?.find((item) => item.id === itemId))
      setCartItems([...cartItems, { id: itemId, count: 1 }]);
    else
      setCartItems(
        cartItems.map((item) => {
          if (item.id === itemId) return { ...item, count: item.count + 1 };
          else return item;
        })
      );
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map((i) => {
        if (i.id === itemId)
          return { ...i, count: i.count === 0 ? 0 : i.count - 1 };
        else return i;
      })
    );
    console.log(cartItems);
  };
  const resetCart = () => {
    setCartItems();
    localStorage.removeItem("CartItem_norozi")
    localStorage.clear()
  };
  return { cartItems, addToCart, removeFromCart, resetCart };
};
export default CartHook;
