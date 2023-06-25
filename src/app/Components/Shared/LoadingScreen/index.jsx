import React from "react";
import { StyledLoadingScreen } from "./StyledLoading";

function LoadingScreen() {
  return (
    <StyledLoadingScreen>
      <div className="circle">
        <div className="wave"></div>
      </div>
    </StyledLoadingScreen>
  );
}

export default LoadingScreen;
