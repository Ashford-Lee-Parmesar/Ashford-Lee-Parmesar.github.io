import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import resume from '../content/resume.pdf'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between flex-wrap bg-[#06141B] p-6 m-6 lg:mb-[8rem]">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl lg:text-2xl tracking-tight">
          <a
            href="#hero"
            className="mt-4 lg:inline-block lg:mt-0 text-[#CCD0CF] hover:text-white mr-4"
          >
            ashford<span className="text-yellow-400">.</span>parmesar
          </a>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 text-white hover:text-white"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="lg:text-lg text-sm flex flex-col lg:flex-grow lg:flex lg:flex-row lg:justify-end">
          <a
            href="#about"
            className="mt-4 lg:inline-block lg:mt-0 text-[#CCD0CF] hover:text-white mr-4"
          >
            <span className="text-red-400">&lt;</span>about
            <span className="text-red-400">/&gt;</span>
          </a>
          <a
            href="#experience"
            className="mt-4 lg:inline-block lg:mt-0 text-[#CCD0CF] hover:text-white mr-4"
          >
            <span className="text-yellow-400">&lt;</span>experience
            <span className="text-yellow-400">/&gt;</span>
          </a>
          <a
            href="#responsive-header"
            className="mt-4 lg:inline-block lg:mt-0 text-[#CCD0CF] hover:text-white mr-4"
          >
            <span className="text-green-400">&lt;</span>projects
            <span className="text-green-400">/&gt;</span>
          </a>
          <a
            href="#responsive-header"
            className="mt-4 lg:inline-block lg:mt-0 text-[#CCD0CF] hover:text-white mr-4"
          >
            <span className="text-blue-400">&lt;</span>contact
            <span className="text-blue-400">/&gt;</span>
          </a>
          <a
            href={resume} target="_blank" rel="noreferrer"
            className="mt-4 lg:inline-block lg:mt-0 text-[#CCD0CF] hover:text-white mr-4"
          >
            <span className="text-red-400">&lt;</span>resume
            <span className="text-red-400">/&gt;</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
