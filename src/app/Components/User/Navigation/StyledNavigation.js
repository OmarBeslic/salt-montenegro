import styled from "styled-components";

export const StyledDesktopNav = styled.div`
  position: fixed;
  height: ${(props) => (props.scrolled ? "90px" : "100px")};
  top: 0;
  z-index: 99;
  border-radius: 0 0 4px 4px;
  display: flex;
  align-items: center;
  width: 100vw;
  border-bottom: ${(props) =>
    props.scrolled ? "none" : " 0.5px solid rgba(255, 255, 255, 0.5)"};
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.scrolled
      ? "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px"
      : "unset"};
  .logo {
    border-right: 0.5px solid rgba(255, 255, 255, 0.5);
    height: 100%;
    display: flex;
    align-items: center;
    background-color: ${(props) => (props.scrolled ? "var(--primary)" : "")};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    img {
      margin: 60px;
      height: 70%;
    }
  }
  .links-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: 100%;
    width: 100%;
    background: ${(props) =>
      props.scrolled ? "var(--backgroundMain)" : "unset"};
    transition: all 0.3s ease-in-out;
    .contact-info {
      height: 25%;
      border-bottom: ${(props) =>
        props.scrolled
          ? " 0.5px solid var(--primary)"
          : " 0.5px solid rgba(255, 255, 255, 0.5)"};

      display: ${(props) => (props.scrolled ? "none" : "flex")};
      align-items: center;
      justify-content: space-between;
      width: 100%;
      span {
        color: ${(props) =>
          props.scrolled ? "var(--primary)" : "var(--textMain)"};
        a {
          font-size: 15px;
          text-decoration: underline;
          margin-left: 5px;
        }
      }
      span:first-child {
        margin-left: 10px;
      }
      span:last-child {
        margin: 0 30px 0 15px;
      }
      .phone {
        padding-right: 15px;
        border-right: ${(props) =>
          props.scrolled
            ? " 0.5px solid var(--primary)"
            : " 0.5px solid rgba(255, 255, 255, 0.5)"};
      }
    }
    .links {
      height: ${(props) => (props.scrolled ? "100%" : "75%")};
      width: 95%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .nav-links {
        display: flex;
        align-items: center;
      }
      .lang-contact {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 15%;
      }
    }
    a {
      text-decoration: none;
      color: ${(props) =>
        props.scrolled ? "var(--primary)" : "var(--textMain)"};

      font-size: 18px;
      transition: all 0.2s ease-in-out;
      &:hover {
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;

export const StyledMobileNav = styled.div`
  width: 100vw;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 33;
  .main-nav {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    z-index: 99;
    background: var(--primary);
    display: flex;
    flex-direction: column;
    .nav {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      width: 100%;
      img {
        height: 90%;
      }
      .lang-nav {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .container {
        margin-left: 10px;
        .bar1,
        .bar2,
        .bar3 {
          width: 35px;
          height: 3px;
          background-color: var(--backgroundMain);
          margin: 6px 0;
          transition: 0.4s;
        }
        &.change .bar1 {
          transform: translate(0, 6px) rotate(-45deg);
        }

        &.change .bar2 {
          opacity: 0;
        }

        &.change .bar3 {
          transform: translate(0, -12px) rotate(45deg);
        }
      }
    }
  }
  .nav-opened {
    transform: translateY(-3000px);
    transition: all 1s ease-in-out;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    background: var(--textMain);
    height: 0;

    a {
      text-decoration: none;
      font-weight: 700;
      color: var(--primary);
    }
    &.active {
      height: 100%;
      z-index: 98;
      transition: all 0.5s cubic-bezier(0, 1, 0, 1);
      transform: translateY(0);
    }
  }
`;
