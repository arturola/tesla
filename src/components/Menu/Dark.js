import React from "react";
import { StyledDark } from "./DarkStyled";
import { bool } from "prop-types";

function Dark({ open }) {
  return (
    <div>
      <StyledDark open={open} />
    </div>
  );
}

Dark.propTypes = {
  open: bool.isRequired,
};

export default Dark;
