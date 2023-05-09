import React, { useMemo } from "react";

import Router from "./routes";

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import palette from "./Theme/palette";
import typography from "./Theme/typography";
import breakpoints from "./Theme/breakpoints";

import "./App.css";

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

          <Router />
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
