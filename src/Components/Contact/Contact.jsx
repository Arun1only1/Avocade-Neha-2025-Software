// Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "5896f329-b0ea-4708-aa04-e19187c9be1b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("Submission failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="contact">
      {" "}
      {/* Added id here */}
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Want a free demo or have any queries? We are here to help and answer
          any questions you might have. We look forward to hearing from you 😊
        </p>
        <ul>
          <li>
            <strong>Email: </strong> &nbsp;&nbsp;infotechprocton@gmail.com
          </li>
          <li>
            <strong>Phone: </strong>&nbsp;&nbsp; 081-561078, 9858029944,
            9868160288, 9847841141, 9847913681
          </li>
          <li>
            <strong>Address: </strong> &nbsp;&nbsp;BP Chowk Ghorahi-15, Dang
          </li>
          <li>
            <strong>Branches: </strong> &nbsp;&nbsp;NewRoad, Nepalgunj |
            Kathmandu
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
            aria-label="Enter your name"
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            aria-label="Enter your email"
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your mobile number"
            required
            aria-label="Enter your mobile number"
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Enter your message"
            required
            aria-label="Enter your message"
          ></textarea>

          <button type="submit" className="btn dark-btn" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit Now"}
          </button>
        </form>

        {/* Form Result Message */}
        <span
          className={`form-result ${
            result.includes("Error") ? "error" : "success"
          }`}
        >
          {result}
        </span>
      </div>
    </div>
  );
};

export default Contact;
