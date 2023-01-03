import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import HeaderBar from "@/components/HeaderBar";
import theme from "@/styles/theme";
import Footer from "@/components/Footer";
import "@/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <HeaderBar />
        <App />
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
