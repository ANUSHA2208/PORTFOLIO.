import React,{useState} from "react";
import {FaWhatsappSquare,FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  
  const handleClick = () => {
    const currentYear = new Date().getFullYear();
    if (year !== currentYear) {
      setYear(currentYear);
    }
  };
  return (
    <div className="pt-24">
      <footer class="footer-distributed">
        <div class="footer-left">

          <h4 class="footer-links">
            <a href="mailto:anushapatil2208@gmail.com">Email</a> · <a href="https://www.linkedin.com/in/anusha-patil-167b79162/">Linkedin</a> · <a href="tel:8971232721">Phone no</a>
          </h4>

          <div class="footer-company-name" onClick={handleClick}>&copy; {year}</div>
  

          {/* <div class="footer-icons">
            <a href="#">
              <FaWhatsappSquare className="w-full h-full"/>
            </a>
            <a href="#">
            <FaLinkedin className="w-full h-full"/>
            </a>
          </div> */}
        </div>

        <div class="footer-right">
          <h2 className="text-2xl pb-2">Contact Us</h2>

          <form action="#" method="post">
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
