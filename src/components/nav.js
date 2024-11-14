import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ShopContextWithCustumHook } from "../context/shopContextWithCustumHook";
import "./nav.css"
const Nav = () => {
  const { cartItems } = useContext(ShopContextWithCustumHook);
  const itemCount = cartItems?.reduce((prevValue, currentValue) => {
  return  prevValue + currentValue.count;
  }, 0);
  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg  ">
      <div className="container">
        <a className="navbar-brand"> NOROUZI-SHOP</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} className="text-danger" />
             {itemCount >0 && <span className="cart-item-count">{itemCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
