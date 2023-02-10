import React from "react";

import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Header() {
  const navLinks = [
    { id: "1", component: "Home", path: "/" },
    { id: "2", component: "Cart", path: "/cart" },
    { id: "3", component: "Contact", path: "/contact" },
  ];
  return (
    <header>
      <div className="container flex justify-around items-center m-auto">
        <img
          className="image w-[50px] h-[50px]"
          src={require("../asset/image/logo.png")}
          alt="#error_picture"
        />
        <ul className="flex gap-3">
          {navLinks.map((each) => (
            <NavLink to={each.path} key={each.id}>
              {each.component}
            </NavLink>
          ))}
        </ul>
        <ShoppingCartIcon />
      </div>
    </header>
  );
}

export default Header;
