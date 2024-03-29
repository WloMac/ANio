import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/NavigationBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Offer from "./components/Offer";
import Rel from "./components/Rel";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Offer />
      <About />
      <Rel />
      <Contact />
      <Footer />
      
    </>
  );
}
