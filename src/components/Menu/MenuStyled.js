import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: white;
  height: 100vh;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  padding: 16px;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  overflow-y: scroll;
  z-index: 1;

  div {
    margin-bottom: 1px;
    border-bottom: 1px solid lightgray;
    font-weight: 620;
    font-size: 15px;
    text-transform: uppercase;
    padding: 20px 2.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;
  }
`;
