import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "rgba(29, 24, 54, 0.4)", color: "#fff" }}
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

    {experience.image && (
      <img
        src={experience.image}
        alt="Experience Image"
        className="w-full h-auto mt-5 opacity-80"
      />
    )}
  </VerticalTimelineElement>
);

const About = () => {
  const initialVisibleCards = 2;
  const [visibleCards, setVisibleCards] = useState(initialVisibleCards);

  const handleSeeMore = () => {
    setVisibleCards(experiences.length);
  };

  const handleSeeLess = () => {
    setVisibleCards(initialVisibleCards);
    // Scroll to the top of the component when "See Less" is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <p className={styles.sectionSubText}>Who we really are</p>
      <h2 className={styles.sectionHeadText}>
        <span className="select-none">Overview</span>
      </h2>

      {/* insert here */}

      <p className={styles.sectionSubText}>Events Witnessed till Now</p>
      <h2 className={styles.sectionHeadText}>
        <span className="select-none">History</span>
      </h2>

      <VerticalTimeline className="mt-10">
        {experiences.slice(0, visibleCards).map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>

      {visibleCards < experiences.length && (
        <div className="mt-3 flex justify-center">
          <button
            className="text-white underline text-xl p-5 rounded-lg bg-purple-700 hover:bg-purple-950"
            onClick={handleSeeMore}
          >
            See More
          </button>
        </div>
      )}

      {visibleCards > initialVisibleCards && (
        <div className="mt-7 flex justify-center">
          <button
            className="text-white underline text-xl p-5 rounded-lg bg-purple-700 hover:bg-purple-950"
            onClick={handleSeeLess}
          >
            See Less
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
