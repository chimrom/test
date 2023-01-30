import React from "react";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";

import './styles/main.css'
import './styles/icon.css'

function App() {
  return (
    <div className="App">
     <Header/>
     <NavBar/>
     <Main/>
     <Slider/>
     <Footer/>
    </div>
  );
}

export default App;
