import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { navLinks } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// this file is dedicated to merch portion!!
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Wear the legacy with Proud!</p>
        <h2 className={styles.sectionHeadText}>
          <span className="select-none">Merchandise</span>
        </h2>
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg text-center w-full md:w-4/6 lg:w-4/6 lg:h-[600px] md:h-[600px] h-[500px] p-8">
            Tshirt
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "merchandise");
