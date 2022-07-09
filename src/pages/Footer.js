import React from "react";
import "../styles/Footer.css";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-item">
        <div className="footer-icons">
          <AiOutlineInstagram />
          <AiOutlineMail />
        </div>
        <p>Święty Marcin 49C Poznań, Polska | 555-555-555</p>
      </div>
      <div className="footer-item">
        <p>© Inky tattoo studio 2022, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
