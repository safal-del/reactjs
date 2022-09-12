import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import TopHeader from "./context/Components/TopHeader/TopHeader";
// import SecondaryMenu from "./context/Components/SecondaryMenu/SecondaryMenu.js";
// import MainMenu from "./context/Components/MainMenu/MainMenu.js";
// import Footer from "./context/Components/Footer/Footer.js";
// import HeaderSlider from "./context/Components/HeaderSlider/HeaderSlider";
import 'tw-elements';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <TopHeader />
    <SecondaryMenu />
    <MainMenu />
    <HeaderSlider /> */}
    <App />
    {/* <Footer /> */}
  </BrowserRouter>
);
