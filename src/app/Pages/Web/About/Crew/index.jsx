import React from "react";
import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import useTranslate from "../../../../../Hooks/useTranslate";
const StyledSailor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border-radius: 10px;
  color: var(--primary);
  margin: 20px 0;
  max-width: 60%;
  &:nth-child(even) {
    flex-direction: row-reverse;
    .about-sailor {
      align-items: end;
      p {
        text-align: left;
        width: 80%;
      }
      align-items: start;
      .name-more {
        h2 {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          text-align: left;
          margin-bottom: 5px;
        }
      }
      .socials {
        justify-content: start;
        text-align: right;
      }
    }
  }
  .about-sailor {
    display: flex;
    align-items: end;
    justify-content: center;
    flex-direction: column;
    p {
      text-align: right;
      width: 80%;
    }
    .name-more {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      h2 {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        text-align: right;
        margin-bottom: 5px;
      }
    }
    .socials {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: end;
      text-align: left;
      a {
        text-decoration: none;
        color: var(--primary);
        background: red;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        border-radius: 100px;
        background: rgba(255, 255, 255, 0.5);
        transition: all 0.3s ease-in-out;
        margin: 0 5px 0 0;
      }
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
    width: 360px;
    background-color: var(--primary);
    display: flex;
    margin: 0 10px;
    align-items: center;
    justify-content: center;
    img {
      width: 380px;
      margin: 10px 0;
      border-radius: 10px;
    }
  }
  @media (max-width: 1024px) {
    max-width: 95%;
    margin: 10px 0;
    &:first-child {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 576px) {
    padding: unset;
    flex-direction: column !important;
    width: 95%;
    .img-backg {
      img {
        width: 230px;
      }
    }
    .about-sailor {
      align-items: center !important;
      .name-more {
        h2 {
          text-align: center !important;
          justify-content: center !important;
          margin: 10px 0;
        }
      }
      .socials {
        justify-content: center !important;
      }
      p {
        width: 90% !important;
        text-align: center !important;
      }
    }
  }
`;

function Sailor({ sailor }) {
  const p = useTranslate();
  return (
    <StyledSailor>
      <div className="img-backg">
        <img loading="lazy" src={sailor?.sailorPhoto} alt="Sailor" title="Sailor"/>
      </div>
      <div className="about-sailor">
        <div className="name-more">
          <h2>{sailor?.name}</h2>
        </div>
        <p>{p(sailor?.aboutSailor)} </p>
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
