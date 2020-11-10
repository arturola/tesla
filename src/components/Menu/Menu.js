import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./MenuStyled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div>USED INVENTORY</div>
      <div>TRADE-IN</div>
      <div>CYBERTRUCK</div>
      <div>ROADSTER</div>
      <div>SEMI</div>
      <div>POWERWALL</div>
      <div>COMMERCIAL SOLAR</div>
      <div>TEST DRIVE</div>
      <div>CHARGING</div>
      <div>FIND US</div>
      <div>SUPPORT</div>
      <div>UNITED STATES</div>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
