import React from "react";
import image from "../content/images/character.svg"

const About = () => {
  return (
    <about id="about">
        <div className="p-6 m-6 py-0 flex flex-col lg:flex-row lg:justify-between h-auto">
        <div className="text-white lg:w-1/4">
                <div className="text-4xl lg:text-7xl">
                about me
            <span className="text-red-400">.</span>
                </div>
        </div>

        </div>
        <div className="text-[#CCD0CF] p-6 m-6 flex flex-col-reverse items-center lg:flex-row lg:items-start lg:justify-between h-auto gap-6">
            <div className="">
            <img id="image-blob" className="lg:h-[500px] lg:w-[500px] w-max h-[350px]" src={image} alt="" />
            </div>
            <div className="text-[#CCD0CF] flex flex-col items-center lg:items-start lg:justify-between h-auto gap-6 lg:w-2/4">

                <div>
                    As a Full Stack Web Developer with two years of experience, I bring a comprehensive skill 
                    set that spans both the front-end and back-end of web development.
                </div>
                <div>
                    My expertise lies in designing and creating visually appealing user interfaces,
                    crafting intuitive and responsive designs that enhance user experience.
                </div>
                <div>
                    Additionally, I have honed my skills in back-end development, focusing on creating robust APIs and writing efficient server-side code.
                </div>
                <div>
                    My hobbies include programming, playing video games and jamming out on my bass guitar.
                </div>
            </div>

        </div>
    </about>
  );
};

export default About;
