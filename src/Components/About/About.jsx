import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src={about_img}
          alt="About New Procton Infotech"
          className="about-img"
        />
      </div>
      <div className="about-right">
        <h3>About New Procton Infotech</h3>
        <h2>Authorized Channel Partner of Busy Accounting Software in Nepal</h2>
        <p>
          At <strong>New Procton Infotech</strong>, we are proud to be one of
          the leading distributors of <strong>Busy Accounting Software</strong>{" "}
          in Nepal. With over <strong>20 years of expertise</strong> in
          accounting software sales, implementation, and tax consulting, we
          ensure seamless integration for your business.
        </p>

        <ul className="about-list">
          <li>
            ✅ <strong>Authorized Channel Partner</strong> – Officially
            recognized distributor of Busy Accounting Software.
          </li>
          <li>
            ✅ <strong>Expertise in Accounting & Taxation</strong> – Combining
            software implementation with expert tax consulting.
          </li>
          <li>
            ✅ <strong>24/7 Customer Support</strong> – Dedicated assistance to
            guide you every step of the way.
          </li>
          <li>
            ✅ <strong>Tailored Solutions</strong> – Optimized software
            solutions for your accounting and taxation needs.
          </li>
        </ul>

        <p>
          Our unique combination of **software expertise** and **tax
          consulting** allows us to provide
          <strong>comprehensive solutions</strong> that help businesses
          streamline their accounting processes effectively. Whether you're a
          small business or a large enterprise, we ensure you get the best
          implementation experience to
          <strong>maximize productivity</strong>.
        </p>

        <div className="about-contact">
          <p>
            <strong>Get in Touch!</strong> Let us help you simplify your
            accounting and tax management with{" "}
            <strong>Busy Accounting Software</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
