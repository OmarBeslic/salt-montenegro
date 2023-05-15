import React, { useMemo } from "react";

import Router from "./routes";

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import typography from "./Theme/typography";
import breakpoints from "./Theme/breakpoints";
import palette from "./Theme/palette";

import "./App.css";
import GlobalStyle from "./globalStyles";

function App() {
  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
      breakpoints,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
