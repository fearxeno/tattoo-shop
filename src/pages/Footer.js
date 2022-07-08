import React from "react";
import "../styles/Footer.css";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-item">
        <AiOutlineInstagram />
        <AiOutlineMail />
        <p>Święty Marcin 49C Poznań, Polska | 555-555-555</p>
      </div>
      <div className="footer-item">
        <AiOutlineCopyrightCircle />
        <p>Inky tattoo studio 2022, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
