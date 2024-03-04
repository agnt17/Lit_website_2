import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { FaInstagram } from "react-icons/fa";

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
      <p>
        <span className="text-4xl   flex text-teal-500 font-bold mb-4 mt-4 ">
          Literary Sub-Council{" "}
        </span>
        It is one of the nine affiliates adorning the University Students'
        Activity Council of HBTU, Kanpur. The University is committed for
        overall personality development of the students. The USAC activities are
        aimed at grooming extra-curriculum skills of the students and the
        literary sub-council takes care of few of these aspects that the
        University tries to inculcate in its students through USAC. This
        sub-council, as the name suggests, deals with the any and all events and
        activities falling in the literary category, which encompasses a huge
        array of activities which not only focus upon the presentation and
        communication skills of the student but also cultivate in them a more
        awakened imagination and enhance their empathy for others and lead them
        to develop their own creativity. The sheer volume of categories that
        comes under the purview of this sub-council speaks of the effect it has,
        or to be more precise, can have on the personality of the students
        should they chose to partake. Literary Sub-Council with the aid of a
        Faculty Convener and Student Secretaries conducts various events
        throughout the year to help the student body get the most enriching yet
        intellectually challenging experience of their college lives. The entire
        academic calendar flaunts a lot of literary events of varying magnitudes
        strategically placed so as not to disrupt the academics and also to
        attract maximum involved from the student body. The events of the
        largest volume and/or paramount importance are conducted by the Team
        Literary Sub-Council as a whole.
        <div className="flex flex-col text-lg  text-purple-400 mt-3">
          <span className="text-xl font-bold mb-4">
            Some of the events that fall under the aforementioned description
            are as follows:
          </span>
          <span>•Kavya Sandhya</span>
          <span>•Annual Literary Fest [Hunkaar]</span>
          <span>•Jashn-e-Naubahar </span>
          <span>•Miscellaneous Government Mandated Events</span>
          <span>•Inter-Collegiate Events</span>
        </div>
      </p>
      <p className="mt-5 mb-5 text-white">
        But this doesn't even begin to cover our lengthy calendar of events but
        for organisational lise we have allocated these events to various clubs
        that function under the aegis of the Literary Sub-Council based on their
        area of expertise.
      </p>
      <p className="text-xl text-bold">
        Literary sub-council in regard to its staggering work load also flaunts
        more clubs than any other sub-council of HBTU which are as follows:
      </p>
      <p>
        <span className="text-3xl flex text-teal-500 font-bold mb-7 mt-7">
          Callidus Community
          <a
            href="https://www.instagram.com/callidus_community/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="mt-1 ml-4 hover:text-pink-700" />
          </a>
        </span>
        Callidus was started with a very ambitious aim of improving the campus
        culture of the university but getting the students involved in a
        mentally stimulating array of activities (Debates, Declamations,
        Extempore, Group Discussions, Words Jams, Recitation Elocution) and many
        more.
        <p className="mt-2">
          More recently the organising team of this club dubbing themselves as
          Callidus Council have tried to shape their activities in a fashion
          that closely resembles the real world implications of the
          communication skills it has always advocated so as to give the student
          body a taste of what they stand to face when they graduate from
          college.
        </p>
        <div className="flex flex-col text-lg  text-purple-400 mt-3">
          <span className="text-xl font-bold">
            Some of the major events by Callidus:
          </span>
          <span>•Declamation</span>
          <span>•Moot Court HBTU</span>
          <span>•Model United Nations</span>
          <span>•Youth Parliament</span>
          <span>•Debate-a-thon</span>
        </div>
      </p>
      <br />
      <p>
        <span className="text-3xl flex text-teal-500 font-bold mb-4">
          Poetry Club HBTU
          <a
            href="https://www.instagram.com/poetryclub_hbtu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="mt-1 ml-4 hover:text-pink-700" />
          </a>
        </span>
        This is one club, which we believe, doesn't need any introduction. True
        to their name they are the poetry club of the university and one of the
        lesser-known facts about this club is that it is the oldest functioning
        club of the sub-council. Having a star-studded list of alumni in its
        roaster. The poetry club has given us some brilliantly creative and
        articulate individuals. Poetry club keeps alive the endangered art of
        poetry on our campus and for that we are eternally grateful to them
        <div className="flex flex-col text-lg  text-purple-400 mt-3">
          <span className="text-xl font-bold">
            Some of the major events by Poetry Club:
          </span>
          <span>•Izhaar</span>
          <span>•Guftagoo</span>
          <span>•Abhivyakkti </span>
          <span>•Poetry Meets</span>
        </div>
      </p>
      <p>
        <span className="text-3xl flex text-teal-500 font-bold mb-4 mt-4">
          Readers of the Ark (ROTA)
          <a
            href="https://www.instagram.com/r_o_t_a_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="mt-1 ml-4 hover:text-pink-700" />
          </a>
        </span>
        The benefits of reading isn't unbeknownst to anyone, irrespective of the
        career path an individual chooses for itself, books of myriad genres
        will always find their place of utmost importance in the individual's
        life. Now the only thing in question is whether one accepts their
        importance willingly or is forced due to direness of the circumstances.
        This is one of the most crucial causes that ROTA is working towards. But
        this is more than just that, ROTA is a safe place for anyone who is
        having a hard time out there, they can forego of their troubles by
        coming into its various discussion sessions where from books to movies
        to fine arts, literally anything that can induce a stimulating
        conversation is taken up as the agenda
        <div className="flex flex-col text-lg  text-purple-400 mt-3">
          <span className="text-xl font-bold">
            Some of the major events by ROTA:
          </span>
          <span>•Community Discussion Sessions</span>
          <span>• Book-a-minute</span>
          <span>•Adhyaay events </span>
        </div>
      </p>

      <p>
        <span className="text-3xl flex text-teal-500 font-bold mb-4 mt-4">
          Finamics
          <a
            href="https://www.instagram.com/finamics_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="mt-1 ml-4 hover:text-pink-700" />
          </a>
        </span>
        There is something more that we need to go out into the world as a
        complete professional other than the knowledge of our respective traits,
        which is financial literacy. Finamics was established with the
        aforementioned aim in mind and as it is quite evident from the name it's
        a play between the words "Finance and Economics". Not knowing the
        infamous "money matters" and how to manage your money can ensure your
        downfall irrespective of your excellence at your particular job.
        FInamics through its various workshops, sessions and competitions
        ensures that the student body of our college is not being devoid of this
        very essential branch of knowledge. They also use their Instagram
        channel to spread awareness regarding financial literacy and get more
        and more people engrossed in the pursuit of this knowledge.
        <div className="flex flex-col text-lg  text-purple-400 mt-3">
          <span className="text-xl font-bold">
            Some of the major events by Finamics:
          </span>
          <span>•Tradeck</span>
          <span>•FL. Workshops</span>
          <span>•Finology</span>
        </div>
      </p>
      <p className="mb-10 text-teal-500 mt-16  text-3xl text-center ">
        Glimpses of the events conducted by the Literary Sub-Council{" "}
      </p>

      {/* insert here */}

      {/* <p className={styles.sectionSubText}>Events Witnessed till Now</p>
      <h2 className={styles.sectionHeadText}>
        <span className="select-none">History</span>
      </h2> */}

      <VerticalTimeline className="mt-10">
        {experiences.slice(0, visibleCards).map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>

      {visibleCards < experiences.length && (
        <div className="mt-3 flex justify-center">
          <button
            className="text-white text-xl p-4 rounded-xl bg-purple-700 hover:bg-purple-950"
            onClick={handleSeeMore}
          >
            See More
          </button>
        </div>
      )}

      {visibleCards > initialVisibleCards && (
        <div className="mt-7 flex justify-center">
          <button
            className="text-white text-xl p-4 rounded-xl bg-purple-700 hover:bg-purple-950"
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
