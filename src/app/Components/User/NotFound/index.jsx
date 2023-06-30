import React from "react";
import logo from "../../../../Assets/images/404.webp";
import { Styled404 } from "./Styled404";
import SecondaryButton from "../../Shared/Buttons/secondarybutton";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();

  return (
    <Styled404>
      <div className="notfound">
        <h1>Ooops...</h1>
        <h2>Something went wrong</h2>
        <p>Error 404 page not found</p>
      </div>
      <img src={logo} alt="" />
          
      <SecondaryButton onClick={() => navigate("/home")}>Back to Home</SecondaryButton>
    </Styled404>
  );
}

export default NotFound;
