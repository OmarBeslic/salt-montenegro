import styled from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
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
      justify-content: center;
      height: 84%;
      width: 100%;
      .description {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 50%;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 var(--primary);
        backdrop-filter: blur(8.5px);
        -webkit-backdrop-filter: blur(8.5px);
        border-radius: 4px;
        h1 {
          color: var(--textMain);
          margin-bottom: 55px;
          
        }
      }
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
`;
