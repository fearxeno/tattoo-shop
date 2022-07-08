import React from "react";
import "../styles/Home.css";
import { motion } from "framer-motion";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Home = () => {
  const center = { lat: 52.406286722807025, lng: 16.923182985415593 };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDBmNJoVcOf1YJ3A3z1IVdhIhIG8ikoeFU",
  });

  if (!isLoaded) return <div></div>;

  return (
    <motion.main
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: "easeIn" }}
    >
      <div className="img">
        <h1>Witamy w Inky tattoo</h1>
      </div>
      <div className="desc">
        <div className="col">
          <h4>Studio Tatuazu Poznan</h4>
          <p>
            Studio tatuażu w samym centrum Poznania. <br />
            Przyjdź i porozmawiaj z
            nami, ewentualnie napisz: inky.tattoo@gmail.com
          </p>
        </div>
        <div className="col">
          <h4>Adres</h4>
          <p>
            Inky Tattoo  <br/>
            Święty Marcin 49C Poznań, Polska  <br/>
            (+48) 555 555 555
          </p>
        </div>
      </div>

      <GoogleMap zoom={16} center={center} mapContainerClassName="map">
        <Marker position={center} title={"Inky studio"} />
      </GoogleMap>
    </motion.main>
  );
};

export default Home;
