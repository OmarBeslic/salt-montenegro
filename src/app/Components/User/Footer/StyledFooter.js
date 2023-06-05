import styled from "styled-components";
import waves from "../../../../Assets/images/water-waves.webp";
export const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(1, 32, 54, 1);
  background-image: url(${waves});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  .footer-up {
    margin: 15px 0 0 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 85%;
    width: 81%;
    display: flex;
    align-items: center;
    justify-content: center;
    .footers {
      display: flex;
      align-items: start;
      justify-content: space-between;
      .footer-el {
        width: 30%;
        padding: 10px 15px;
        display: flex;
        align-items: start;
        justify-content: start;
        flex-direction: column;
        text-align: center;
        .logo {
          width: 100px;
          margin: 10px 0;
        }
        .socials {
          margin: 20px 0 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          /* width: 30%; */
          a {
            text-decoration: none;
            color: var(--textMain);
            background: red;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            border-radius: 100px;
            background: rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease-in-out;
            margin: 0 15px 0 0;
            &:hover {
              color: var(--primary);
              background: rgba(255, 255, 255, 0.8);
            }
          }
        }
        &.links {
          align-items: center;
          h3 {
            text-align: center;
            width: 100%;
          }
          .footer-links {
            height: 150px;
            width: 230px;
            display: flex;
            align-items: start;
            justify-content: start;
            flex-direction: column;
            flex-wrap: wrap;
            a {
              font-size: 18px;
              font-weight: 700;
              text-decoration: none;
              color: rgba(255, 255, 255, 0.5);
              transition: all 0.3s ease-in-out;
              padding: 5px 15px;
              &:hover {
                color: var(--textMain);
              }
            }
          }
        }
      }
      h3 {
        padding: 15px 0;
      }
      p {
        text-align: left;
      }
      & > * {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
  .footer-down {
    height: 50px;
    width: 100%;
    color: var(--textMain);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-weight: 700;
      font-size: 16px;
      padding: 0 5px;
    }
  }
  @media (max-width: 1024px) {
    .footer-up {
      width: 95%;
      .footers {
        flex-direction: column;
        align-items: center;
        .footer-el {
          width: 95% !important;
          justify-content: center !important;
          align-items: center !important;
          p {
            text-align: center;
          }
          &.links {
            .footer-links {
              width: 100% !important;
              height: unset !important;
              flex-direction: row;
              justify-content: center !important;
              align-items: center !important;
            }
          }
        }
      }
    }
  }
`;
