import React from "react";
import { StyledLoadingScreen } from "./StyledLoading";

function LoadingScreen() {
  return (
    <StyledLoadingScreen>
      <div class="circle">
        <div class="wave"></div>
      </div>
    </StyledLoadingScreen>
  );
}

export default LoadingScreen;
