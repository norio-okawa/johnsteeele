import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { histories } from "../constants";
import "../custom.css";

const Card = () => {
  const theme = useContext(ThemeContext);
  return (
    <motion.div
      className="mt-8 flex md:flex-row justify-between flex-col md:items-stretch items-center 
    gap-5"
    >
      {histories.map((el, index) => (
        <motion.div
          key={index}
          initial={"hidden"}
          whileInView={"visible"}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className={
            theme.state.darkMode
              ? "mt-8 card bg-white rounded-lg"
              : "mt-8 card bg-gray-100 rounded-lg"
          }
        >
          <div className="card-header rounded-t-lg"></div>
          <div className="card-header-bottom">
            <span className="company-logo" data-loaded="">
              <img src={require(`../assets/${el.logo}`)} alt={el.logo} />
            </span>
          </div>
          <div className="card-main p-4 pb-8">
            <div className="flex flex-col">
              <i className="text-black italic font-bold">{el.title}</i>
              <i className="text-black italic">{el.company}</i>
              <i className="italic text-slate-400">{el.period}</i>
              <p className="text-black text-sm">{el.desc}</p>
            </div>
            <div>
              <ul className="flex flex-wrap skills mt-5 gap-5">
                {el.skills.map((sk) => (
                  <li key={sk.name}>
                    <span className="flex gap-2">
                      <img src={sk.link} alt={sk.name} className="skill-logo" />
                      <span className="text-black text-sm self-center">
                        {sk.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Card;
