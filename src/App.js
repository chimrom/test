import React from "react";
import { useMediaQuery } from "react-responsive";
import Header from "./Components/Header/Header";
import HeaderMobile from "./Components/HeaderMobile/HeaderMobile";
import Main from "./Components/Main/Main";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";

import "./styles/main.css";
import "./styles/icon.css";

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 645px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 645px)" });
  return (
    <div className="App">
      {isDesktop && <Header />}
      {isMobile && <HeaderMobile />}
      <Main />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
