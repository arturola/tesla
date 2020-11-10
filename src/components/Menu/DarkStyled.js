import styled from "styled-components";

export const StyledDark = styled.nav`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.3);
  height: 100vh;
  opacity: ${({ open }) => (open ? "1" : "0")};

  padding: 650px;
  position: absolute;
  top: 0;
  left: 0;
  transition-duration: 0.5s;
  overflow: hidden;
`;
