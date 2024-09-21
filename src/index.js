import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import StateProvider from "./components/StateProvider";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color:${(props) => props.theme.colors.grey};;
    color:white;
  }
`;
const theme = {
  colors: {
    black: "black",
    grey: "#282c34",
  },
};
const Main = () => (
  <React.StrictMode>
    <StateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>
);

const root = createRoot(document.getElementById("root"));
root.render(<Main />);
