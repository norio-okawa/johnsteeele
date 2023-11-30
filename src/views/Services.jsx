import React, { useContext } from "react";
import { serviceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="services"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-24">
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Services
        </h2>
        <div className="">
          <div className="mt-8 flex md:flex-row justify-between flex-col md:items-stretch items-center ">
            {serviceData.map((el) => (
              <motion.div
                key={el.name}
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                className={
                  theme.state.darkMode
                    ? "md:w-96 p-4 bg-white rounded-lg flex items-center flex-col mt-8"
                    : "md:w-96 p-4 bg-gray-100 rounded-lg flex items-center flex-col mt-8"
                }
              >
                <img src={el.img} alt="" />
                <h4
                  className={
                    theme.state.darkMode
                      ? "text-xl font-bold mt-4"
                      : "text-xl font-bold mt-4 text-black"
                  }
                >
                  {el.name}
                </h4>
                <p
                  className={
                    theme.state.darkMode
                      ? "text-lg mt-2 text-justify"
                      : "text-lg mt-2 text-justify text-black"
                  }
                >
                  {el.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
