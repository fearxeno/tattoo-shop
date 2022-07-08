import React from "react";
import "../styles/Artists.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
import artist_1 from "../images/artists1.jpg";
import artist_2 from "../images/artist2.jpg";
import artist_3 from "../images/artist3.jpg";
import artist_4 from "../images/artist4.jpg";
import artist_5 from "../images/artist5.jpg";
import artist_6 from "../images/artist6.jpg";

const Artists = () => {
  return (
    <motion.div
      className="artists"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: "easeIn" }}
    >
      <h3>Nasi artysci</h3>
      <hr />
      <section className="cards">
        <div className="card">
          <div className="picture">
            <img src={artist_1} alt="" className="profile" />
          </div>
          <h4>Michał</h4>
          <p>Tatuaż Neotradycyjny</p>
          <div className="card-bottom">
            <button>Book</button>
            <a href="https://www.instagram.com/" target="blank">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="picture">
            <img src={artist_2} alt="" className="profile" />
          </div>
          <h4>Mateusz</h4>
          <p>Tatuaż realistyczny / graficzny</p>
          <div className="card-bottom">
            <button>Book</button>
            <a href="https://www.instagram.com/" target="blank">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="picture">
            <img src={artist_3} alt="" className="profile" />
          </div>
          <h4>Tomek</h4>
          <p>Realistyczny tatuaż kolorowy</p>
          <div className="card-bottom">
            <button>Book</button>
            <a href="https://www.instagram.com/" target="blank">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="picture">
            <img src={artist_4} alt="" className="profile" />
          </div>
          <h4>Alex</h4>
          <p>Fine line, dotwork, minimal</p>
          <div className="card-bottom">
            <button>Book</button>
            <a href="https://www.instagram.com/" target="blank">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="picture">
            <img src={artist_5} alt="" className="profile" />
          </div>
          <h4>Marysia</h4>
          <p>Szeroko pojęty styl graficzny</p>
          <div className="card-bottom">
            <button>Book</button>
            <a href="https://www.instagram.com/" target="blank">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="picture">
            <img src={artist_6} alt="" className="profile" />
          </div>
          <h4>Karolina</h4>
          <p>Dotwork</p>
          <div className="card-bottom">
            <button>Book</button>
            <a href="https://www.instagram.com/" target="blank">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Artists;
