import React from "react";
import headshot from "../content/images/character2.svg"

const Hero = () => {
  return (
    <hero id="hero">
      <div className="p-6 m-6 flex flex-col lg:flex-row lg:justify-between h-auto">
        <div className="text-white lg:w-2/4">
          <div className="text-4xl lg:text-7xl mb-12">
            I<span className="text-red-400">'</span>m Ashford Lee Parmesar
            <span className="text-yellow-400">.</span>
          </div>
          <div className="text-lg lg:text-xl text-[#CCD0CF] mb-10">
            I am a full-stack web developer, passionate about creating seamless
            digital experiences. Currently, I am honing my craft at <a href="#bidvestelectricalwebsite"className="text-blue-400 hover:text-blue-500">Bidvest
            Electrical</a>.
          </div>
          <div className="text-lg lg:text-xl text-[#CCD0CF] mb-12">
          Where code meets creativity.
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img id="image-blob" className="lg:h-[500px] lg:w-[500px] w-max h-[350px]" src={headshot} alt="" />
        </div>
      </div>
    </hero>
  );
};

export default Hero;
