import React from "react";
import "../styles/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: "easeIn" }}
    >
      <section className="cards">
        <div className="card">
          <h2>Badz z nami w kontakcie</h2>
          <p>
            Masz może pomysł na swój tatuaż? <br />
            albo chcesz się skontaktować z jednym z naszych artystów? <br />
            Pisz śmiało!
          </p>
          <p className="text-color">Święty Marcin 49C Poznań, Polska</p>
          <p className="text-color">555-555-555</p>
        </div>
        <form>
          <input type="text" name="" id="name" placeholder="Imie" />
          <input type="email" name="" id="email" placeholder="Adres email" />
          <input type="tel" name="" id="phone" placeholder="Numer telefonu" />
          <input type="text" placeholder="Twoja wiadomość" id="msg" />
          <button>Wyślij</button>
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;
