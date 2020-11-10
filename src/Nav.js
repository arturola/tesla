import React, { useRef, useState } from "react";
import "./Nav.css";
import logo from "./logo.svg";
// import MenuIcon from "@material-ui/icons/Menu";
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu/Menu";
import { useOnClickOutside } from "./hooks";
import Dark from "./components/Menu/Dark";

function Header() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="nav">
      <img className="nav__logo" src={logo} alt="" />
      <div className="nav__models">
        <div className="nav__model">
          <span className="nav__model-name">MODEL S</span>
        </div>
        <div className="nav__model">
          <span className="nav__model-name">MODEL 3</span>
        </div>
        <div className="nav__model">
          <span className="nav__model-name">MODEL X</span>
        </div>
        <div className="nav__model">
          <span className="nav__model-name">MODEL Y</span>
        </div>
        <div className="nav__model">
          <span className="nav__model-name">Solar Roof</span>
        </div>
        <div className="nav__model">
          <span className="nav__model-name">solar Panels</span>
        </div>
        {/* <div className="nav__models"> */}
        <div className="nav__right">
          <span className="nav__options-name-shop">Sign In</span>

          <span className="nav__options-name-signin">Shop</span>

          {/* <MenuIcon className="nav__burger" /> */}
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
      <div className="nav__left">
        <Dark open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Header;
