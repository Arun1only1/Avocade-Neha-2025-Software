import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaWhatsapp } from "react-icons/fa"; // Importing Facebook and WhatsApp icons

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll to apply sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-container">
      {/* Contact Info Bar */}
      <div className="contact-info">
        <div>
          <span>Contact Numbers: </span>
          <span>
            082-561078, 082-560439, 9858029944, 9857829944, 9847841141,
            9868160288, 9847913681
          </span>
        </div>
        <div>
          <span>Email: </span>
          <span>newproctoninfotech@gmail.com</span>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/New-Procton-Infotech-Software-Sales-and-Support-123456"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/9779858029944"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="Logo" className="logo" />

        {/* Mobile Menu Toggle */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="product"
              smooth={true}
              offset={-250}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-260}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
