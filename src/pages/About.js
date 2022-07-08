import React from "react";
import "../styles/About.css";
import person from "../images/2.png";
import person2 from "../images/3.png";
import person3 from "../images/1.png";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: "easeIn" }}
    >
      <section className="columns">
        <div className="col-1">
          <img src={person} alt="" />
        </div>
        <div className="col-2">
          <h2>Jak to wszystko </h2>
          <div className="col-item">
            <h2>sie zaczelo</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            suscipit totam magni, impedit beatae iusto officia vitae non tempore
            placeat odio atque sint, consequatur alias ea maiores aspernatur eum
            expedita eaque dolor delectus repellat! Itaque quos molestias,
            voluptas, rem aliquid deserunt iusto nam odit laborum placeat culpa
            similique perspiciatis eius. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Possimus provident sit ex facere et earum modi non
            similique iste corrupti. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Explicabo quam tempora, debitis
          </p>
          <br />
          <p>
            Officiis cum saepe architecto illo nam dolorum deserunt! Et, totam?
            Soluta nobis quisquam quia natus amet aperiam sint atque, ex facere
            error nemo alias libero aliquid, architecto maiores velit veniam
            dignissimos tenetur provident sequi neque. Libero cumque repellendus
            natus, rem quo incidunt doloribus esse rerum nulla sed ad nihil,
            facilis obcaecati odio facere corporis! Est ducimus modi sed
            provident maiores autem. Iusto.
          </p>
          <RiArrowDownSLine className="arrow-down" />
        </div>
      </section>
      <section className="columns second">
        <div className="col-1">
          <img src={person2} alt="" />
        </div>
        <div className="col-2">
          <h2>Zycie</h2>
          <div className="col-item">
            <h2>z tatuazami</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            suscipit totam magni, impedit beatae iusto officia vitae non tempore
            placeat odio atque sint, consequatur alias ea maiores aspernatur eum
            expedita eaque dolor delectus repellat! Itaque quos molestias,
            voluptas, rem aliquid deserunt iusto nam odit laborum placeat culpa
            similique perspiciatis eius. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Possimus provident sit ex facere et earum modi non
            similique iste corrupti. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Explicabo quam tempora, debitis
          </p>
          <br />
          <p>
            Officiis cum saepe architecto illo nam dolorum deserunt! Et, totam?
            Soluta nobis quisquam quia natus amet aperiam sint atque, ex facere
            error nemo alias libero aliquid, architecto maiores velit veniam
            dignissimos tenetur provident sequi neque. Libero cumque repellendus
            natus, rem quo incidunt doloribus esse rerum nulla sed ad nihil,
            facilis obcaecati odio facere corporis! Est ducimus modi sed
            provident maiores autem. Iusto.
          </p>
          <RiArrowDownSLine className="arrow-down" />
        </div>
      </section>
      <section className="columns third">
        <div className="col-1">
          <img src={person3} alt="" />
        </div>
        <div className="col-2">
          <h2>Kultura </h2>
          <br /> <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            suscipit totam magni, impedit beatae iusto officia vitae non tempore
            placeat odio atque sint, consequatur alias ea maiores aspernatur eum
            expedita eaque dolor delectus repellat! Itaque quos molestias,
            voluptas, rem aliquid deserunt iusto nam odit laborum placeat culpa
            similique perspiciatis eius. Lorem ipsum dolor sit amet consectetur
          </p>
          <br />
          <p>
            Officiis cum saepe architecto illo nam dolorum deserunt! Et, totam?
            Soluta nobis quisquam quia natus amet aperiam sint atque, ex facere
            error nemo alias libero aliquid, architecto maiores velit veniam
            dignissimos tenetur provident sequi neque. Libero cumque repellendus
            natus, rem quo incidunt doloribus esse rerum
          </p>
          <RiArrowUpSLine className="arrow-down" />
          <a className="back">Powrót</a>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
