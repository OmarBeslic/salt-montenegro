import styled from "styled-components";

export const StyledImageModal = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 99999;
  .image-div {
    width: 60%;
    height: 70vh;
    align-items: center;
    justify-content: center;
    display: flex;
    img {
      /* width: 100%; */
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  svg {
    position: absolute;
    top: 50px;
    right: 70px;
    cursor: pointer;
    path {
      fill: var(--backgroundMain);
    }
  }
  @media (max-width: 1024px) {
    .image-div {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        object-fit: contain;
        border-radius: 10px;
        height: unset;
      }
    }
    .image-div {
    img {
      width: 100%;
      height: unset;
    }
  }

    svg {
      top: 20px;
      right: 20px;
    }
  }
`;
