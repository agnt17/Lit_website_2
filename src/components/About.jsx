import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { experiences, dummyImages } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const CarouselCard = ({ image }) => (
  <div className="w-full h-96 overflow-hidden rounded-xl lg:w-4/6 mx-auto">
    <img
      src={image.image}
      alt="Carousel"
      className="w-full h-full object-cover"
    />
  </div>
);

const About = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRef.current && sliderRef.current.slickNext();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000, // Adjust the speed for slide transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Set to true to enable autoplay
    autoplaySpeed: 5000, // Adjust the speed for autoplay in milliseconds
  };

  return (
    <>
      <motion.div variants={textVariant()} className="mb-10">
        <p className="text-center text-4xl font-bold sm:text-2xl">Overview</p>
        <p className="mt-4 text-center text-xl sm:text-lg">
          Who we are and what do we do!
        </p>
      </motion.div>

      <Slider {...settings} className="mt-10" ref={sliderRef}>
        {dummyImages.map((image, index) => (
          <CarouselCard key={index} image={image} />
        ))}
      </Slider>
      <p className={styles.heroHeadText}>
        <span className="mt-16">History</span>
      </p>

      <VerticalTimeline className="mt-10">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </>
  );
};

export default SectionWrapper(About, "about");
