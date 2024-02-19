import React from "react";
import { fadeIn } from "../utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { feedbacks } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
// this file is dedicated to events page...

const ExperienceCard = ({ feedbacks }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={feedbacks.date}
    iconStyle={{ background: feedbacks.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={feedbacks.icon}
          alt={feedbacks.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    {/* From here onwards the content can be changed and it is stored all in the index file of constants folder. */}
    <div>
      <h3 className="text-white text-[24px] font-bold ">{feedbacks.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {feedbacks.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {feedbacks.points.map((point, index) => (
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
const Feedbacks = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <p className={styles.sectionSubText}>This year what we Expect</p>
      <h2 className={styles.sectionHeadText}>
        <span className="select-none">Events</span>
      </h2>
      {/* </motion.div> */}

      <div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] flex flex-col gap-3"
      >
        <span className="font-extralight">Coming soon...</span>
        <span className="text-2xl">Events itenary will be shown here </span>
        <span className="font-extralight text-teal-400">Stay Tuned...</span>
      </div>
      <div className="mt-20 flex flex-col ">
        {/* <VerticalTimeline>
          {feedbacks.map((feedbacks, index) => (
            <ExperienceCard key={index} feedbacks={feedbacks} />
          ))}
        </VerticalTimeline> */}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "events");
