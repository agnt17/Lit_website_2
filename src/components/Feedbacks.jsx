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
    <div
      className={`mx-2 max-w-sm rounded h-96 w-fit overflow-y-scroll shadow-md`}
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#4A5568 #1A202C",
      }}
    >
      <h3 className="text-white text-[24px] font-bold ">{feedbacks.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {feedbacks.company_name}
      </p>
      <ul className="text-fuchsia-500 text-lg mt-4 select-none  ">
        {feedbacks.heading}
      </ul>
      <ul className="mt-2">
        {feedbacks.point.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      <ul className="text-fuchsia-500 text-lg mt-4 select-none  ">
        {feedbacks.heading1}
      </ul>
      <ul className="text-fuchsia-600 text-sm mt-4 select-none  ">
        {feedbacks.subheading1}
      </ul>
      <ul className="mt-3 list-disc ml-5 space-y-2">
        {feedbacks.rules.map((rule, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {rule}
          </li>
        ))}
      </ul>
      <ul className="text-fuchsia-500 text-md mt-4 select-none  ">
        {feedbacks.heading2}
      </ul>

      <ul className="text-fuchsia-600 text-sm mt-4 select-none  ">
        {feedbacks.subheading2}
      </ul>
      <ul className="mt-3 list-disc ml-5 space-y-2">
        {feedbacks.judging.map((rule, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {rule}
          </li>
        ))}
      </ul>
      <ul className="text-sm m-3">{feedbacks.judging0}</ul>

      <ul className="text-fuchsia-600 text-sm mt-4 select-none  ">
        {feedbacks.subheading21}
      </ul>
      <ul className="mt-3 list-disc ml-5 space-y-2">
        {feedbacks.judging1.map((rule, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {rule}
          </li>
        ))}
      </ul>
      <ul className="text-fuchsia-600 text-sm mt-4 select-none  ">
        {feedbacks.subheading22}
      </ul>
      <ul className="text-sm m-3">{feedbacks.judging12}</ul>
      <ul className="mt-3 list-disc ml-5 space-y-2">
        {feedbacks.rules2.map((rule, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {rule}
          </li>
        ))}
      </ul>

      <ul className="text-fuchsia-500 text-lg mt-4 select-none  ">
        {feedbacks.heading3}
      </ul>
      <ul className="text-fuchsia-600 text-sm mt-2 select-none  ">
        {feedbacks.subHeading3}
      </ul>
      <ul className="list-disc ml-5 space-y-2 m-3">
        {feedbacks.prizes.map((prize, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {prize}
          </li>
        ))}
      </ul>
    </div>
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
        {/* <span className="font-extralight">Coming soon...</span>
        <span className="text-2xl">Events itenary will be shown here </span>
        <span className="font-extralight text-teal-400">Stay Tuned...</span> */}
      </div>
      <div className="mt-8 flex flex-col ">
        <VerticalTimeline>
          {feedbacks.map((feedbacks, index) => (
            <ExperienceCard key={index} feedbacks={feedbacks} />
          ))}
        </VerticalTimeline>
      </div>
      <div className="items-center">
        <p className="m-5 font-medium text-xl flex mx-auto ml-5 text-center justify-center text-teal-500">
          For registration of other colleges
        </p>
        <p className="m-5 font-medium text-md flex mx-auto ml-5 text-center justify-center text-teal-500">
          You can register for these events right here by just filling this
          Google Form
        </p>
        <button className="flex justify-center items-center mt-10 mb-[-50px] font-semibold text-2xl hover:text-black cursor-pointer bg-violet-600 hover:bg-violet-400 rounded-lg w-fit p-4  mx-auto ">
          <a
            href="https://docs.google.com/forms/d/1mtFtuKlrlvpu4ZTa9ekXwq12zs0hqTIyT3CPRiWB3-k/edit?ts=65f05eb6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google form link
          </a>
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "events");
