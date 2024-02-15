import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 relative z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] mt-10" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="flex flex-row items-center">
          <img src="./public/hunkar_modified.png" className="w-96" />
          <p
            className={`${styles.heroSubText} ml-8 text-white-100 text-sm select-none`}
          >
            Autonomous part of Literary SubCouncil
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 mb-4 mr-4 z-20">
        <img
          src="./public/lit_logo.jpg"
          className="w-24 h-24 rounded-full border-2 border-x-purple-600 hover:border-y-purple-600 cursor-pointer"
          alt="Lit logo"
        />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-12 h-24 rounded-full border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 50, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-6 h-6 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
