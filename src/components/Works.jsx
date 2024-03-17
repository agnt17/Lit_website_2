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

        <div className="flex flex-col items-center justify-center p-4">
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
          <div className="items-center">
            <p className="text-2xl mt-5 text-teal-500">
              Buy your Tshirt Right here
            </p>
            <button className="flex justify-center items-center mt-10 mb-[-50px] font-semibold text-2xl hover:text-black cursor-pointer bg-violet-600 hover:bg-violet-400 rounded-lg w-fit p-4  mx-auto ">
              <a
                href="https://forms.gle/SUbbvupRLtWj6eLc8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google form link
              </a>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "merchandise");
