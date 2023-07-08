import React from "react";
import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
const StyledSailor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  background: var(--backgroundMain);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 10px;
  color: var(--primary);
  margin: 0 50px;
  .about-sailor {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .name-more {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
    .socials {
      width: 100%;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        text-decoration: none;
        color: var(--primary);
        background: red;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 55px;
        border-radius: 100px;
        background: rgba(255, 255, 255, 0.5);
        transition: all 0.3s ease-in-out;
        margin: 0 5px 0 0;
      }
    }
    button {
      margin: 0;
    }
  }
  h1 {
    line-height: normal;
    margin: 10px 0;
    font-size: 55px;
    color: var(--primary);
  }
  .img-backg {
    height: 100%;
    width: 270px;
    background-color: var(--primary);
    display: flex;
    margin: 0 10px;
    align-items: center;
    justify-content: center;
    img {
      width: 290px;
      margin: 10px 0;
    }
  }
  @media (max-width: 1024px) {
    &:first-child {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 576px) {
    flex-direction: column-reverse;
    width: 95%;
    .img-backg {
      img {
        width: 230px;
      }
    }
    .about-sailor {
      .socials {
        justify-content: center;
      }
    }
  }
`;

function Sailor({ sailor }) {
  return (
    <StyledSailor>
      <div className="about-sailor">
        <div className="name-more">
          <h2>{sailor?.name}</h2>
        </div>
        <div className="img-backg">
          <img src={sailor?.sailorPhoto} alt="Sailor" title="Sailor" />
        </div>
        <div className="socials">
          <Link to={`https://wa.me/${sailor?.sailorWA}`} target="_blank">
            <WhatsAppIcon />
          </Link>
          <Link to={sailor?.sailorInsta} target="_blank">
            <InstagramIcon />
          </Link>
          <Link to={sailor?.sailorFb} target="_blank">
            <FacebookIcon />
          </Link>
        </div>
      </div>
    </StyledSailor>
  );
}

export default Sailor;
