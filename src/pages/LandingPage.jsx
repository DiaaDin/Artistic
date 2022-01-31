import React from "react";
import About from "../components/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Services from "../components/services/Services";
import Team from "../components/team/Team";

const LandingPage = ({ theme, toggleTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <Services />
      <About />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
