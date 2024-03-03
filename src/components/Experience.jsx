import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
// import { RxArrowTopRight } from "react-icons/rx";
// import { Link } from "react-router-dom";

const Experience = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isScaling, setIsScaling] = useState(false);

  const handleContainerClick = (e) => {
    // Stop the propagation of the click event to prevent it from reaching the outside click handler
    e.stopPropagation();
  };

  // Toggle selected card and set scaling flag on click
  const handleCardClick = (index) => {
    if (selectedCard === index) {
      // If the same card is clicked again, reset selectedCard and set scaling flag
      setSelectedCard(null);
      setIsScaling(false); // Reset scaling flag
    } else {
      // Otherwise, select the clicked card
      setSelectedCard(index);
      setIsScaling(true); // Set scaling flag to trigger animation
    }
  };

  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <p className={styles.sectionSubText}>The pillars of this Council...</p>
      <h2 className={styles.sectionHeadText}>
        <span className="select-none">Team</span>
      </h2>
      {/* </motion.div> */}
      <div className="flex lg:flex-row flex-col gap-8 mt-10 mb-20 m-10 ">
        <div className="lg:w-1/3 flex flex-col items-center">
          <img
            src="./shivani_koshta.jpg"
            className="rounded-2xl object-cover w-56 h-56"
            alt="Shivani Koshtha"
          />
          <h1 className="text-2xl text-center mt-12">Ms. Shivani Koshtha</h1>
          <h3 className="text-xl text-center mt-4 text-teal-400">Convener</h3>
          <h3 className="text-l text-center mt-2">Literary Sub-Council</h3>
          <p>
            <a href="tel:+918765123440">+91 8765123440</a>
          </p>

          <div className="flex flex-row mt-3">
            <a
              href="https://www.linkedin.com/in/shivani-koshtha-76a81523a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <FaLinkedin className="mr-4 scale-150 hover: text-blue-600" />
            </a>

            <a
              href="https://www.instagram.com/koshthashivani?igsh=aWY2OGZvbDkzbGNq"
              target="_blank"
            >
              <FaInstagram className="mr-2  scale-150 hover:  text-pink-600" />
            </a>
          </div>
        </div>

        <div className="lg:w-1/3 flex flex-col items-center mt-8 lg:mt-0">
          <img
            src="./anjali_bind.jpg"
            className="rounded-2xl object-cover w-56 h-56"
            alt="Anjali Bind"
          />
          <h1 className="text-2xl text-center mt-12">Anjali Bind</h1>
          <h3 className="text-xl text-center mt-4 text-teal-400">Secretary</h3>
          <h3 className="text-l text-center mt-4">Literary Sub-Council</h3>
          <p>
            <a href="tel:+918218242146">+91 8218242146</a>
          </p>

          <div className="flex flex-row mt-3">
            <a
              href="https://www.linkedin.com/in/anjali-bind-819a2223a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <FaLinkedin className="mr-4 scale-150 hover: text-blue-600" />
            </a>

            <a
              href="https://www.instagram.com/anjalibind3724?igsh=ZHFiZmtkZ280N2Uw"
              target="_blank"
            >
              <FaInstagram className="mr-2  scale-150 hover:  text-pink-600" />
            </a>
          </div>
        </div>

        <div className="lg:w-1/3 flex flex-col items-center mt-8 lg:mt-0">
          <img
            src="./suraj_.jpg"
            className="rounded-2xl object-cover w-56 h-56"
            alt="Suraj Tripathi"
          />
          <h1 className="text-2xl text-center mt-12">Suraj Tripathi</h1>
          <h3 className="text-xl text-center mt-4 text-teal-400">Secretary</h3>
          <h3 className="text-l text-center mt-4">Literary Sub-Council</h3>
          <p>
            <a href="tel:+919336854395" target="_blank">
              +91 9336854395
            </a>
          </p>

          <div className="flex flex-row mt-3">
            <a
              href="https://www.linkedin.com/in/suraj-tripathi-b65404229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <FaLinkedin className="mr-4 scale-150 hover: text-blue-600" />
            </a>

            <a
              href="https://www.instagram.com/suraj_mani_tripathi_official?igsh=b2phNDdmY3o4Mmc0"
              target="_blank"
            >
              <FaInstagram className="mr-2  scale-150 hover:  text-pink-600" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-28 mt-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`flex flex-col gap-6 group relative shadow-lg text-white rounded-3xl p-4 w-full lg:w-[400px] lg:h-[400px] overflow-hidden cursor-pointer bg-white bg-opacity-5 backdrop-blur-sm  border-2 border-pink-300 hover:border-pink-400  ${
              selectedCard === index ? "" : ""
            } hover:scale-110 transition ease-in-out duration-1000 ${
              isScaling ? "scale-100" : ""
            }`}
            onMouseOver={() => handleCardHover(index)}
            onMouseOut={() => handleCardHover(null)}
            onClick={() => handleCardClick(index)} // Toggle selected card on click
          >
            <div className="absolute inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-blue opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3 rounded-xl justify-center items-center">
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-2xl font-semibold">{service.title}</h3>

              {/* Content inside the card */}
              <div
                className={`text-center ${
                  selectedCard === index ? "block" : "hidden"
                }`}
              >
                <h2 className="text-2xl text-teal-400">MEMBERS</h2>
                <p className=" text-2xl hover:transition ease-in-out duration-1000">
                  {service.data()}
                </p>
                {/* You can customize the display of service data here */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCard !== null && (
        <motion.div
          className=" rounded-lg w-6/12 h-6/12 z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleContainerClick}
        >
          {/* ... your existing code ... */}
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Experience, "team");
