import { useState } from "react";
import { Logo } from "../util/constant";
const Header = () => {
  const [auth, setAuth] = useState("login");
  return (
    <nav className="navbar">
      <img src={"https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"} alt="" />
      <ul className="navlinks">
        <li>Home</li>
        <li>Cart</li>
        <li>About</li>
        <button type="button" onClick={() => setAuth("logout")}>
          {auth}
        </button>
      </ul>
    </nav>
  );
};

export default Header;
