import React from "react";
import headshot from "../content/images/male_profile.svg"

const Hero = () => {
  return (
    <hero>
      <div className="p-6 m-6 flex flex-col lg:flex-row lg:justify-between">
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
        <div className="lg:w-2/4 flex justify-center items-center">
          <img className="border-[10px] rounded-full lg:h-[400px] lg:w-[400px] w-[250px] h-[250px]" src={headshot} alt="" />
        </div>
      </div>
    </hero>
  );
};

export default Hero;
