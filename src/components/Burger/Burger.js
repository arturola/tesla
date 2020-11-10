// import React from "react";
// import { StyledBurger } from "./BurgerStyled";
// import { bool, func } from "prop-types";

// function Burger({ open, setOpen }) {
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   return (
//     <StyledBurger open={open} onClick={handleOpen}>
//       <div />
//       <div />
//       <div />
//     </StyledBurger>
//   );
// }
// Burger.propTypes = {
//   open: bool.isRequired,
//   setOpen: func.isRequired,
// };

// export default Burger;
import React from "react";
import { StyledBurger } from "./BurgerStyled";
import { bool, func } from "prop-types";

function Burger({ open, setOpen }) {
  return (
    <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        {/* <span />
        <span />
        <span /> */}
        <div />
        <div />
        <div />
      </StyledBurger>
    </div>
  );
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;
