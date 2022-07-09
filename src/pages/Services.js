import React, { useRef } from "react";
import "../styles/Services.css";
import picture from "../images/6.png";
import picture2 from "../images/8.png";
import picture3 from "../images/10.png";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { scrollToSection, scrollToTop } from "../components/ScrollTo";

const Services = () => {
  const projects = useRef(null);
  const coverUp = useRef(null);
  const removeTattoo = useRef(null);

  return (
    <motion.div
      className="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: "easeIn" }}
    >
      <section className="columns">
        <div ref={projects} className="col-1">
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
              <a href="https://www.worldtattoogallery.com/" target="blank">Zobacz Galerie</a>
              <button onClick={() => scrollToSection(coverUp)}>
                <RiArrowDownSLine className="arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div ref={coverUp} className="col-item">
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
              <a href="https://www.worldtattoogallery.com/" target="blank">Zobacz Galerie</a>
              <button onClick={() => scrollToSection(removeTattoo)}>
                <RiArrowDownSLine className="arrow" />
              </button>
            </div>
          </div>
          <img src={picture2} alt="" />
        </div>
        <div className="col-1">
          <img src={picture3} alt="" />
          <div ref={removeTattoo} className="col-item">
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
              <a href="https://www.worldtattoogallery.com/" target="blank">Zobacz Galerie</a>
              <button onClick={() => scrollToTop()}>
                <RiArrowUpSLine className="arrow" />
              </button>
              <button onClick={() => scrollToTop()} className="back">
                Powrót
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
