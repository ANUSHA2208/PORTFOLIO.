import React, { useState } from "react";
import { FaWhatsappSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    const currentYear = new Date().getFullYear();
    if (year !== currentYear) {
      setYear(currentYear);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:anushapatil2208@gmail.com?subject=Contact%20Form%20Submission&body=${encodeURIComponent(
      `Email: ${email}%0D%0AMessage: ${message}`
    )}`;
    window.location.href = mailtoUrl;
    setEmail("");
    setMessage("");
  };

  return (
    <div className="pt-24">
      <footer className="footer-distributed">
        <div className="footer-left">
          <h4 className="footer-links">
            <a href="mailto:anushapatil2208@gmail.com">Email</a> ·{" "}
            <a href="https://www.linkedin.com/in/anusha-patil-167b79162/">
              Linkedin
            </a>{" "}
            · <a href="tel:8971232721">Phone no</a>
          </h4>

          <div className="footer-company-name" onClick={handleClick}>
            &copy; {year}
          </div>
        </div>

        <div className="footer-right">
          <h2 className="text-2xl pb-2">Contact Us</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <button type="submit" class="send">Send</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
