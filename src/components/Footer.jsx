import React from "react";
// import "bootstrap/dist/css/bootstrap.css"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div style={{ width: "90%" }} className="pl-[10%] pt-2">
      <div className="bg-gray-700 flex flex-row  justify-center items-center h-1 rounded-xl z-10 "></div>

      <footer className="flex flex-row justify-between pt-2">
        <div className="flex flex-row pl-10 mb-10 mt-2 text-gray-400">
          © 2024 Company, Inc. All rights reserved.
        </div>
        <div className="flex flex-row ml-4 pr-10 mt-2">
          <ul className="flex flex-row ">
            <li className="flex  flex-rowml-4 mr-4 text-3xl text-gray-400 ">
              <a
                href="https://www.instagram.com/literarysubcouncil_hbtu/"
                target="_blank"
              >
                <FaInstagram className="hover:text-pink-700" />
              </a>
              <a
                href="https://www.google.com/maps/place/HBTU+-+Kanpur/@26.4934722,80.3048467,17z/data=!3m1!4b1!4m6!3m5!1s0x399c472bc6fb5a61:0x12b6fef2872cee80!8m2!3d26.4934674!4d80.3074216!16s%2Fg%2F11cn5pgp2z?entry=ttu"
                className="ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLocationDot className="hover:text-red-600" />
              </a>
              <a
                href="https://github.com/agnt17/Lit_website_2/"
                className="ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon="fa-brands fa-github" className="hover:text-red-600"/>  
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
