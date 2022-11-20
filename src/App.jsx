import React, { useEffect } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Cv from "./components/cv/Cv";
import music from "./assets/musicPage.mp3";
import Road from "./components/road/Road";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Services></Services>
      <Portfolio></Portfolio>
      <Road></Road>
      <Cv></Cv>
      <Contact></Contact>
      <Footer></Footer>
      <audio
        controls={true}
        loop={true}
        hidden
        style={{
          position: "absolute",
        }}
      >
        <source src={music} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default App;
