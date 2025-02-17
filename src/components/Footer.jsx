import React from "react";
import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[rgb(187,237,47)] py-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/agustin-orcha-web3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-800 transition-colors"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com/aguorcha?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-800 transition-colors"
            >
              <FaGithub className="text-3xl" />
            </a>
          </div>

          <div className="flex items-center mb-4 md:mb-0">
            <MdEmail className="text-black text-2xl mr-2" />
            <span className="text-black">aguorcha@gmail.com</span>
          </div>

          <div className="flex items-center text-black">
            <span className="mr-2">Hecho con</span>
            <FaHeart className="text-black text-xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
