import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Header = () => {
  const [cart] = useContext(CartContext);
  return (
    <nav>
      <h1 className="logo">chanuka randitha</h1>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
};

export default Header;
