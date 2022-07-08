import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";

//FaBars

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <nav>
      <img src={logo} alt="" />
      <FaBars className="menu" onClick={() => setClick(!click)} />
      <ul className={click ? "nav-list active" : "nav-list"}>
        <li className="list-item">
        <Link to="/">Home</Link>
        </li>
        <li className="list-item">
          <Link to="/about">O nas</Link>
        </li>
        <li className="list-item">
        <Link to="/artists">Artyści</Link>
        </li>
        <li className="list-item">
        <Link to="/services">Usługi</Link>
        </li>
        <li className="list-item">
        <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
