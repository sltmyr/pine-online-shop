import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./global_styles";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
