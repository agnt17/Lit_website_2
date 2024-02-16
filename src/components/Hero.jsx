import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden z-50 opacity-100">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        <div className="hidden sm:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] mt-10" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col sm:flex-row items-center">
          <img src="./hunkar_modified.png" className="w-96" />
          <p
            className={`${styles.heroSubText} ml-8 text-white-100 text-sm select-none sm:text-center`}
          >
            Autonomous part of Literary Sub-Council
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        {/* Image for large screens */}
        <img
<<<<<<< HEAD
          src="./herobg2.png"
=======
          src="../assets/herobg2.png"
>>>>>>> fa35d5fff82dd7f2dd74fe5b2910db5a44da69b4
          className="hidden sm:block mt-72 scale-50 max-w-1/4 rounded-xl opacity-80"
        />

        {/* Logo for small screens */}
        <img
<<<<<<< HEAD
          src="./lit_logo.jpg"
=======
          src="../assets/lit_logo.jpg"
>>>>>>> fa35d5fff82dd7f2dd74fe5b2910db5a44da69b4
          className="sm:hidden w-3/4 h-auto rounded-full mt-72 hover:border border-4 border-opacity-0 border-blue-500"
        />
      </div>

      <div className="fixed bottom-0 right-0 mb-4 mr-4 z-20 hidden sm:block">
        <img
          src="../assets/lit_logo.jpg"
          className="w-24 h-24 rounded-full border-2 border-x-purple-600 hover:border-y-purple-600 cursor-pointer"
          alt="Lit logo"
        />
      </div>
    </section>
  );
};

export default Hero;
