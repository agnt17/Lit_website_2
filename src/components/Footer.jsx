import React from "react";
// import "bootstrap/dist/css/bootstrap.css"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
            <li className="flex ml-4 mr-4 text-3xl text-gray-400">
              <a
                href="https://www.instagram.com/literarysubcouncil_hbtu/"
                target="_blank"
              >
                <FaInstagram className="hover:text-pink-700" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
