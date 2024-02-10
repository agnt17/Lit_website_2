import React from "react";
// import { Tilt } from "react-tilt";

import { styles } from "../styles";
// import { services } from "../constants";
import { fadeIn } from "../utils/motion";
// import { SectionWrapper } from "../hoc";

//here is the imports for time line
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";



// this page is purely dedicated to about us page

const ExperienceCard = ({experience}) =>(
   <VerticalTimelineElement
    contentStyle = {{background : '#1d1836', color: '#fff'}}
    contentArrowStyle = {{borderRight : '7px solid #232631'}}
    date={experience.date}
    iconStyle = {{background: experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src = {experience.icon}
          alt = {experience.company_name}
          className="w-[60%] h-[60%] object-contain" 
        />
      </div>
    }
  >
  {/* From here onwards the content can be changed and it is stored all in the index file of constants folder. */}
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) =>(
          <li
            key = {`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
  </VerticalTimelineElement>
)
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Who we are and what we contribute
        </p>
        <h2 className={styles.sectionHeadText}>
          <span className="select-none">Overview</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Here we will write the text related to what is hunkaar and the
        importance it holds.
      </motion.p>
      {/* We will inject here prvious legacy and what this council have done*/}
      {/* from here we will render the timeline of about us and after it we will have the teams component */}
      {/* <motion.div>

      </motion.div> */}
      

      <div className="mt-20 flex flex-col">
         <VerticalTimeline>
          {experiences.map((experience, index) =>(
            <ExperienceCard  key = {index} experience = {experience}/>
          ))}
         </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
