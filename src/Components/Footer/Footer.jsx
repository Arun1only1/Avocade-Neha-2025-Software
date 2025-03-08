import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Companylogo from "../../assets/Companylogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Products and Plan</h3>
          <ul>
            <li>Blue</li>
            <li>Saffron</li>
            <li>Emerald</li>
            <li>Mobile App</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="hero" smooth={true} offset={0} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="product" smooth={true} offset={-50} duration={500}>
                Product
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-50} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} offset={-50} duration={500}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Industries We Serve</h3>
          <ul>
            <li>Automotive</li>
            <li>Petrol Pump</li>
            <li>Retail</li>
            <li>Hardware</li>
            <li>Tiles & Marble</li>
            <li>Paints</li>
            <li>Manufacturing</li>
            <li>Tour & Travels</li>
            <li>Gems & Jewellery</li>
            <li>Garments</li>
            <li>Computer Hardware</li>
            <li>FMCG</li>
            <li>Stationery</li>
            <li>Mobile Stores</li>
            <li>Electrical Goods</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Modules</h3>
          <ul>
            <li>Financial Accounting</li>
            <li>e-Billing for Nepal</li>
            <li>Inventory Management</li>
            <li>Manufacturing</li>
            <li>Payroll & HR</li>
            <li>CRM</li>
            <li>Point of Sales (POS)</li>
            <li>Branch Management</li>
          </ul>
        </div>

        <div className="footer-logo-container">
          <img src={Companylogo} alt="companyLogo" />
          <p>New Procton Infotech</p>
          <p>Authorized Channel Partner of Busy Software for Nepal</p>
          <p>
            <i>All Nepal Service Available</i>
          </p>
          <p>Contact No:082-561078, 9858029944, </p>
          <p>9847913681, 9857829944, 9868160299, 9847841141</p>
          <p></p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons-container">
          <div className="social-icons">
            <a
              href="https://wa.me/9779858029944"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <FaWhatsapp className="social-icon whatsapp" />
            </a>
            <a
              href="https://www.facebook.com/arun"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook - New Procton Infotech- Software Sales and Support"
            >
              <FaFacebookF className="social-icon facebook" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© Copyright InfoProcton. 2025 All Rights Reserved</p>
        <p>
          <a href="/terms">Terms and Conditions</a> |{" "}
          <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
