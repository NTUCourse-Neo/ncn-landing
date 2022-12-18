import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import HeaderBar from "./components/HeaderBar";
import theme from "./styles/theme";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HeaderBar />
      <App />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
