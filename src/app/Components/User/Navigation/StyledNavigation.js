import styled from "styled-components";

export const StyledDesktopNav = styled.div`
  height: 90px;
  position: fixed;
  top: 0;
  z-index: 1;
  border-radius: 0 0 4px 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 75px;
  background: rgba(49, 112, 142, 0.5);
  opacity: 0.8;
  .logo {
    width: 70px;
    img {
      width: 100%;
    }
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    a {
      text-decoration: none;
      color: var(--textMain);
      transition: all 0.2s ease-in-out;
      &:hover {
        color: var(--primary);
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;
