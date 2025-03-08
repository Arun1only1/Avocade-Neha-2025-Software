import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Product from "./Components/Products/Products";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Product" title="What We Offer" />
        <Product />
        <About />

        <Title subTitle="Contact us" title="Get In Touch" />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
