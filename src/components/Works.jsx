import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Wear the legacy with Pride!</p>
      <h2 className={styles.sectionHeadText}>
        <span className="select-none">Merchandise</span>
      </h2>
      
      <div className="flex items-center justify-center p-4">
        <div className="flex flex-col lg:flex-row bg-white bg-opacity-5 backdrop-blur-md rounded-lg text-center w-full md:w-5/6 lg:w-4/6 lg:h-auto sm:h-auto p-4 relative">
          <div className="w-full lg:w-1/2 pr-2 lg:pr-4">
            <img
              src="/hunkaar_merch_image1_-removebg-preview.png"
              alt="Tshirt 1"
              className="object-cover w-full h-auto rounded-lg hover:scale-125 transition ease-in-out duration-1000 "
            />
            <h2 className=" text-2xl">Front</h2>
          </div>

          <hr />
          <div className="w-full lg:w-1/2 pl-2 lg:pl-4">
            <img
              src="/hunkaar_merch_image2-removebg.png"
              alt="Tshirt 2"
              className="object-cover w-full h-auto rounded-lg hover:scale-125 transition ease-in-out duration-1000 "
            />
            <h2 className="mb-2 text-2xl">Back</h2>
          </div>
          <hr />
        </div>
      </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "merchandise");
