import styled from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
  width: auto;
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
    justify-content: center;
    .home-content {
      display: flex;
      align-items: center;
      justify-content: start;
      height: 84%;
      width: 100%;
      justify-content: start;
    }
  }
  .bg-video {
    top: 0;
    left: 0;
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
    
    height: 60vh;
    
  }
}
@media (max-width: 576px) {
    .bg-video{
      height: 100vh;
    }
    .overlay {
    }
  }
`;
