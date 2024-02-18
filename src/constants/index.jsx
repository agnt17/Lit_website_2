import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About us",
  },
  {
    id: "events",
    title: "Events",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "merchandise",
    title: "Merchandise",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   id: 1,
  //   title: "Conveyer",
  //   icon: creator,
  //   data: () => (
  //     <ul>
  //       <li style={{ display: "flex", alignItems: "center" }}>
  //         Dr. Shivani Koshtha{" "}
  //         <a
  //           href="https://www.linkedin.com/in/madhav-diwedi/"
  //           target="_blank"
  //           style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
  //         >
  //           <span style={{ marginRight: "4px" }}>
  //             <FaLinkedin />
  //           </span>
  //           <span>
  //             <FaInstagram />
  //           </span>
  //         </a>
  //       </li>
  //     </ul>
  //   ),
  // },
  // {
  //   id: 2,
  //   title: "Secretory",
  //   icon: web,
  //   data: () => (
  //     <ul>
  //       <li style={{ display: "flex", alignItems: "center" }}>
  //         Anjali Bind{" "}
  //         <a
  //           href="https://www.linkedin.com/in/madhav-diwedi/"
  //           target="_blank"
  //           style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
  //         >
  //           <span style={{ marginRight: "4px" }}>
  //             <FaLinkedin />
  //           </span>
  //           <span>
  //             <FaInstagram />
  //           </span>
  //         </a>
  //       </li>
  //       <li style={{ display: "flex", alignItems: "center" }}>
  //         Suraj Tripathi{" "}
  //         <a
  //           href="https://www.linkedin.com/in/madhav-diwedi/"
  //           target="_blank"
  //           style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
  //         >
  //           <span style={{ marginRight: "4px" }}>
  //             <FaLinkedin />
  //           </span>
  //           <span>
  //             <FaInstagram />
  //           </span>
  //         </a>
  //       </li>
  //     </ul>
  //   ),
  // },
  {
    id: 3,
    title: "Web Dev",
    icon: mobile,
    data: () => (
      <ul className="flex flex-col">
        <li style={{ display: "flex", alignItems: "center" }}>
          Madhav Diwedi{" "}
          <a
            href="https://www.linkedin.com/in/madhav-diwedi/"
            target="_blank"
            style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
          >
            <span style={{ marginRight: "4px" }}>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
          </a>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          Aditya Gupta{" "}
          <a
            href="https://www.linkedin.com/in/madhav-diwedi/"
            target="_blank"
            style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
          >
            <span style={{ marginRight: "4px" }}>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
          </a>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          Harsh Agarwal{" "}
          <a
            href="https://www.linkedin.com/in/madhav-diwedi/"
            target="_blank"
            style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
          >
            <span style={{ marginRight: "4px" }}>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
          </a>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          Kaustubh Dixit{" "}
          <a
            href="https://www.linkedin.com/in/madhav-diwedi/"
            target="_blank"
            style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
          >
            <span style={{ marginRight: "4px" }}>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
          </a>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          Akshaya Singh{" "}
          <a
            href="https://www.linkedin.com/in/madhav-diwedi/"
            target="_blank"
            style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
          >
            <span style={{ marginRight: "4px" }}>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
          </a>
        </li>
      </ul>
    ),
  },
  // {
  //   id: 4,
  //   title: "Hospitality",
  //   icon: backend,
  //   data: () => (
  //     <ul>
  //       <li style={{ display: "flex", alignItems: "center" }}>
  //         Anjali Bind{" "}
  //         <a
  //           href="https://www.linkedin.com/in/madhav-diwedi/"
  //           target="_blank"
  //           style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
  //         >
  //           <span style={{ marginRight: "4px" }}>
  //             <FaLinkedin />
  //           </span>
  //           <span>
  //             <FaInstagram />
  //           </span>
  //         </a>
  //       </li>
  //       <li style={{ display: "flex", alignItems: "center" }}>
  //         Suraj Tripathi{" "}
  //         <a
  //           href="https://www.linkedin.com/in/madhav-diwedi/"
  //           target="_blank"
  //           style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
  //         >
  //           <span style={{ marginRight: "4px" }}>
  //             <FaLinkedin />
  //           </span>
  //           <span>
  //             <FaInstagram />
  //           </span>
  //         </a>
  //       </li>
  //     </ul>
  //   ),
  // },
  // {
  //   id: 5,
  //   title: "Marketing",
  //   icon: web,
  //   data: () => (
  //     <ul>
  //       <li style={{ display: "flex", alignItems: "center" }}>
  //         Anjali Bind{" "}
  //         <a
  //           href="https://www.linkedin.com/in/madhav-diwedi/"
  //           target="_blank"
  //           style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
  //         >
  //           <span style={{ marginRight: "4px" }}>
  //             <FaLinkedin />
  //           </span>
  //           <span>
  //             <FaInstagram />
  //           </span>
  //         </a>
  //       </li>
  //       <li style={{ display: "flex", alignItems: "center" }}>
  //         Suraj Tripathi{" "}
  //         <a
  //           href="https://www.linkedin.com/in/madhav-diwedi/"
  //           target="_blank"
  //           style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
  //         >
  //           <span style={{ marginRight: "4px" }}>
  //             <FaLinkedin />
  //           </span>
  //           <span>
  //             <FaInstagram />
  //           </span>
  //         </a>
  //       </li>
  //     </ul>
  //   ),
  // },
  // {
  //   id: 6,
  //   title: "Security",
  //   icon: mobile,
  //   data: () => (
  //     <ul>
  //       <li style={{ display: "flex", alignItems: "center" }}>
  //         Anjali Bind{" "}
  //         <a
  //           href="https://www.linkedin.com/in/madhav-diwedi/"
  //           target="_blank"
  //           style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
  //         >
  //           <span style={{ marginRight: "4px" }}>
  //             <FaLinkedin />
  //           </span>
  //           <span>
  //             <FaInstagram />
  //           </span>
  //         </a>
  //       </li>
  //       <li style={{ display: "flex", alignItems: "center" }}>
  //         Suraj Tripathi{" "}
  //         <a
  //           href="https://www.linkedin.com/in/madhav-diwedi/"
  //           target="_blank"
  //           style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
  //         >
  //           <span style={{ marginRight: "4px" }}>
  //             <FaLinkedin />
  //           </span>
  //           <span>
  //             <FaInstagram />
  //           </span>
  //         </a>
  //       </li>
  //     </ul>
  //   ),
  // },
  // {
  //   id: 7,
  //   title: "Publicity",
  //   icon: backend,
  //   data: () => (
  //     <ul>
  //       <li style={{ display: "flex", alignItems: "center" }}>
  //         Anjali Bind{" "}
  //         <a
  //           href="https://www.linkedin.com/in/madhav-diwedi/"
  //           target="_blank"
  //           style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
  //         >
  //           <span style={{ marginRight: "4px" }}>
  //             <FaLinkedin />
  //           </span>
  //           <span>
  //             <FaInstagram />
  //           </span>
  //         </a>
  //       </li>
  //       <li style={{ display: "flex", alignItems: "center" }}>
  //         Suraj Tripathi{" "}
  //         <a
  //           href="https://www.linkedin.com/in/madhav-diwedi/"
  //           target="_blank"
  //           style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
  //         >
  //           <span style={{ marginRight: "4px" }}>
  //             <FaLinkedin />
  //           </span>
  //           <span>
  //             <FaInstagram />
  //           </span>
  //         </a>
  //       </li>
  //     </ul>
  //   ),
  // },
  // {
  //   id: 8,
  //   title: "Management",
  //   icon: web,
  //   data: () => (
  //     <ul>
  //       <li style={{ display: "flex", alignItems: "center" }}>
  //         Anjali Bind{" "}
  //         <a
  //           href="https://www.linkedin.com/in/madhav-diwedi/"
  //           target="_blank"
  //           style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
  //         >
  //           <span style={{ marginRight: "4px" }}>
  //             <FaLinkedin />
  //           </span>
  //           <span style={{ marginRight: "4px" }}>
  //             <FaInstagram />
  //           </span>
  //         </a>
  //       </li>
  //       <li style={{ display: "flex", alignItems: "center" }}>
  //         Suraj Tripathi{" "}
  //         <a
  //           href="https://www.linkedin.com/in/madhav-diwedi/"
  //           target="_blank"
  //           style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
  //         >
  //           <span style={{ marginRight: "4px" }}>
  //             <FaLinkedin />
  //           </span>
  //           <span style={{ marginRight: "4px" }}>
  //             <FaInstagram />
  //           </span>
  //         </a>
  //       </li>
  //     </ul>
  //   ),
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const feedbacks = [
  {
    title: "Kavya Sandhya",
    company_name: "Literary Sub-Council",
    icon: creator,
    iconBg: "#383E56",
    date: "13th April 2023",
    points: [
      "Kavya Sandhya organized during the annual fest of the university is a poetry symposium,witnessing the presence of many great poets across the country.Shakeel Azmi, Mehshar Afridi,Dr. Kumar Vishwas, Rahat Indori etc have been a part of this poetry conclave.",
    ],
    image: "./kavya_sandhya.png",
  },
];
const experiences = [
  {
    title: "Kavya Sandhya",
    company_name: "Literary Sub-Council",
    icon: backend,
    iconBg: "#383E56",
    date: "13th April 2023",
    points: [
      "Kavya Sandhya organized during the annual fest of the university is a poetry symposium,witnessing the presence of many great poets across the country.Shakeel Azmi, Mehshar Afridi,Dr. Kumar Vishwas, Rahat Indori etc have been a part of this poetry conclave.",
    ],
    image: "./kavya_sandhya.png",
  },
  {
    title: "JASHN-E-NAUBAHAR ",
    company_name: "Literary Sub-Council",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "11th February 2024",
    points: [
      "It is an event celebrating both, heartfelt poetry and soul touching music.Shree Balmohan Pandey, a renowned poet, mesmerized everyone with his soulful poetry while the Surmohi brothers unified the atmosphere with sufi magic. The event provided a platform to the budding poets to share stage with some renowned names in the field of poetry.",
    ],
    image: "./jashn_e_naubahar.jpg",
  },
  {
    title: "HBTU-MUN",
    company_name: "Literary Sub-Council",
    icon: backend,
    iconBg: "#383E56",
    date: "5 Aug 2022 - 7 Aug 2022",
    points: [
      "Model United Nations (also Model UN or MUN) is an academic simulation of the United Nations with an aim to educate and make the participants understand the functioning and policy formation of governments of different countries, results of globalization, the role of communication in co-operation amongst nations, and multilateral diplomacy as a means to combat various issues",
    ],
    image: "./HBTU_MUN.png",
  },
  {
    title: "Youth Parliament",
    company_name: "Literary Sub-Council",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "14th April 2023",
    points: [
      "Kavyotsav helped one to shed their inhibitions and fears by expressing their feelings and getting connected to the stories of others.  The students presented their own compositions, including poetry on various themes such as mother, college life, and nature, along with shayaris, nazms, and ghazals from celebrated shayars and poets, encompassing the navras, including veer ras, shringar ras, hasya ras, karun ras, and various other genres.",
    ],
    image: "./youth-parliament.jpg",
  },
  {
    title: "Kavyotsav",
    company_name: "Meta",
    icon: backend,
    iconBg: "#383E56",
    date: "12th April 2023",
    points: [
      "Youth parliament provides a common platform and fosters healthy discussions about policy reforms, parliamentary activities, policymaking, educational programs,etc.Participants are allotted the portfolio of each minister which then lead to a fierce yet fruitful debate between the government and the opposition",
    ],
    image: "./kavyotsav.jpg",
  },
  {
    title: "Moot Court",
    company_name: "Meta",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "28th June 2023",
    points: [
      "Youth parliament provides a common platform and fosters healthy discussions about policy reforms, parliamentary activities, policymaking, educational programs,etc.Participants are allotted the portfolio of each minister which then lead to a fierce yet fruitful debate between the government and the opposition",
    ],
    image: "./moot_court.jpg",
  },
  {
    title: "Debate-A-Thon",
    company_name: "Meta",
    icon: backend,
    iconBg: "#383E56",
    date: "13th April 2023",
    points: [
      "It is a special format of debate organised in the form of a marathon, consisting of  four person teams competing in a knockout or sudden death type tournament in a competitive Lincoln Douglas debate format. Every team faces a new subject of debate in each round which either it has to defend or fight against.",
    ],
    image: "./Debate-A-Thon.jpg",
  },
  {
    title: "Poetry Meet",
    company_name: "Meta",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "27th May 2023",
    points: [
      "It was an  afternoon that was a beautiful brew of poetry and culminated with  new budding poets, who owned the stage with their confidence.The atmosphere felt intimate and welcoming, with opportunities for honest conversations and connection between poets and audience members. Overall, it was a poetry meet that was an inspiring and uplifting experience which embraced the creativity for all the attendees.",
    ],
    image: "./Poetry_Meet.jpg",
  },
  {
    title: "MR. LITERATI AND MISS LITERATI  ",
    company_name: "Meta",
    icon: backend,
    iconBg: "#383E56",
    date: "14th April 2023",
    points: [
      "To celebrate the literary connoisseurs and the mastery of language,this event is conducted,where two extraordinary titles, 'Mr. Literati and Miss Literati' are bestowed upon the deserving winners.The esteemed titles stand as a beacon of literary distinction, symbolising the intellectual prowess, the creative brilliance, and the unwavering dedication of the winner towards literature.",
    ],
    image: "./Mr.literary.jpg",
  },
  {
    title: "Srijan",
    company_name: "Meta",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "3rd Sep 2023",
    points: [
      "The event was conducted in an online manner through Google Meet. It was an interactive session which helped develop a camaraderie between the student across different years and branches, through their shared love of poetry.",
    ],
    image: "./srijan.png",
  },
  {
    title: "Declamation",
    company_name: "Meta",
    icon: backend,
    iconBg: "#383E56",
    date: "1st Dec 2023",
    points: [
      "Declamation is the annual session inaugural event where Participants are each allotted with a speech of historical significance, who are then judged on their fluency, consistency and outlook towards the speech .",
    ],
    image: "./declamation.jpg",
  },
];

const dummyImages = [
  {
    index: 1,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    index: 2,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    index: 3,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    index: 4,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    index: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

export { services, technologies, experiences, dummyImages, feedbacks };
