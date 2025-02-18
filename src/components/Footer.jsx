import React from "react";
import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-footer-gradient text-black py-8 h-36 flex justify-center items-center">
      <div className="container mx-auto px-20 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/agustin-orcha-web3/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-300 hover:scale-125"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com/aguorcha?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-300 hover:scale-125"
            >
              <FaGithub className="text-3xl" />
            </a>
          </div>

          <div className="flex items-center mb-4 md:mb-0">
            <MdEmail className="text-black text-2xl mr-2" />
            <span>aguorcha@gmail.com</span>
          </div>

          <div className="flex items-center">
            <span className="mr-2">Hecho con</span>
            <FaHeart className="text-xl mr-2" />
            <span>y React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
