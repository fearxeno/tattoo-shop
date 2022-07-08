import React from "react";
import "../styles/Services.css";
import picture from "../images/6.png";
import picture2 from "../images/8.png";
import picture3 from "../images/10.png";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      className="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: "easeIn" }}
    >
      <section className="columns">
        <div className="col-1">
          <img src={picture} alt="" />
          <div className="col-item">
            <h2>Indywidualne</h2> <br />
            <h2>Projekty</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam recusandae consequatur aut eos veniam architecto animi
              ipsam, suscipit sint ratione ab saepe magni doloribus omnis
              delectus deleniti eveniet porro dolor?
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
              provident. Tempora vitae odit repellendus minus nobis quisquam
              veritatis at temporibus aspernatur itaque perspiciatis ab
              obcaecati vel enim ipsum, saepe ratione?
            </p>
            <div className="bottom">
              <a href="/">Zobacz Galerie</a>
              <RiArrowDownSLine className="arrow-down" />
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="col-item">
            <h2>Cover-up</h2> <br />
            <h2>Tatuazu</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam recusandae consequatur aut eos veniam architecto animi
              ipsam, suscipit sint ratione ab saepe magni doloribus omnis
              delectus deleniti eveniet porro dolor?
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
              provident. Tempora vitae odit repellendus minus nobis quisquam
              veritatis at temporibus aspernatur itaque perspiciatis ab
              obcaecati vel enim ipsum, saepe ratione?
            </p>
            <div className="bottom">
              <a href="/">Zobacz Galerie</a>
              <RiArrowDownSLine className="arrow-down" />
            </div>
          </div>
          <img src={picture2} alt="" />
        </div>
        <div className="col-1">
          <img src={picture3} alt="" />
          <div className="col-item">
            <h2>Usuniecie</h2> <br />
            <h2>Tatuazu</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam recusandae consequatur aut eos veniam architecto animi
              ipsam, suscipit sint ratione ab saepe magni doloribus omnis
              delectus deleniti eveniet porro dolor?
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
              provident. Tempora vitae odit repellendus minus nobis quisquam
              veritatis at temporibus aspernatur itaque perspiciatis ab
              obcaecati vel enim ipsum, saepe ratione?
            </p>
            <div className="bottom">
              <a href="/">Zobacz Galerie</a>
              <RiArrowUpSLine className="arrow-down" />
              <a href="/" className="back">
                Powrot
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
