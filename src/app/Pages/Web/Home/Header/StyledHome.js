import styled from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
  width: auto;
  width: 100%;
  overflow: hidden;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(49, 112, 142, 0.025);
    display: flex;
    align-items: end;
    justify-content: start;
    .home-content {
      display: flex;
      align-items: center;
      justify-content: start;
      height: 84%;
      width: 30%;
      margin-left: 150px;
      justify-content: start;
    }
  }
  .bg-video {
    width: ${(props) => (props.isMobile ? "100%" : "100vw")};
    height: 95vh;
    object-fit: cover;
    z-index: -100;
  }
  @media (max-width: 1024px) {
    .home-content {
      display: flex;
      align-items: center;
      justify-content: center !important;
      height: 84%;
      width: 100%;
      justify-content: start;
    }
    .bg-video {
      height: 80vh;
    }
    .overlay {
      align-items: center;
    }
  }
  @media (max-width: 576px) {
    .bg-video {
      height: 115vh;
    }
    .overlay {
      align-items: center;
    }
  }
`;
