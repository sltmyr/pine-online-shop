import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./global_styles";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
