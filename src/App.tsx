import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./components/navbar/NavBar";
import { GlobalStateProvider } from "./context/UserAccess";
import ProductsListing from "./components/products/ProductsListing";
import Widget from "./components/widgets/Widget";
import { Product, WidgetData } from "./interfaces/Inteface";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./components/home/Home";

const App = () => {
  // create a darkTheme function to handle dark theme using createTheme
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#121212",
        paper: "#121212",
      },
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <GlobalStateProvider>
          <Home />
        </GlobalStateProvider>
      </ThemeProvider>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
