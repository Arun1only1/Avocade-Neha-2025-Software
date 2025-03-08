import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./Hero.css";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h4>IRD Approved e-Billing Software</h4>
        <h1>Busy Accounting Software in Nepal</h1>
        <p>
          Busy Software is a tax billing and accounting solution for small to
          medium enterprises, available on desktop and mobile. It's IRD-approved
          for e-billing in Nepal.
        </p>
        {/* Link that scrolls to the 'Contact' section */}
        <Link
          to="contact" // The 'id' of the Contact section to scroll to
          smooth={true} // Enable smooth scrolling
          offset={-50} // Adjust the scroll position
          duration={500} // Duration of the scroll animation
          className="btn" // Add styles to the button
        >
          Get Free Demo
        </Link>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
