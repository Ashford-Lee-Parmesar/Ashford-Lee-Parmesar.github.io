import React from "react";

const Experience = () => {
  return (
    <experience id="experience">
        <div className="p-6 m-6 py-0 flex flex-col lg:flex-row lg:justify-between h-auto">
        <div className="text-white">
                <div className="text-4xl lg:text-7xl">
                experience
            <span className="text-yellow-400">.</span>
                </div>
        </div>
        
        </div>
        <div className="text-[#CCD0CF] p-6 m-6 flex flex-col lg:flex-row lg:justify-between gap-10">
            <div className="lg:w-1/4 flex flex-col gap-9  text-lg ">
                <div id="jobs" className="flex flex-col gap-1">
                    <div>
                        Aug 2022 - Present
                    </div>
                    <div className="lg:text-3xl text-white lg:ml-10">
                        Bidvest Electrical
                    </div>
                    <div className="lg:ml-10">
                        Junior Fullstack Web Developer
                    </div>
                </div>

                <div id="jobs" className="flex flex-col gap-1">
                    <div>
                        Mar 2022 - May 2022
                    </div>
                    <div className="lg:text-3xl text-white lg:ml-10">
                        Naivgate Support & Documentation
                    </div>
                    <div className="lg:ml-10">
                        Freelance Technical Writer
                    </div>
                </div>

            </div>
            <div className="lg:w-2/4 flex flex-col">
                <div className="text-4xl lg:text-5xl text-white mb-10">
                    Skills
                    <span className="text-blue-400">.</span>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="text-2xl border rounded p-2">
                        <span className="text-red-400 hover:text-red-500">FRONT END DEVELOPMENT</span>
                        <span className="text-lg text-white"> (ReactJS, AngularJS, Javascript, Typescript, SCSS, SASS, HTML, CSS, TailwindCSS) </span>
                    </div>
                    <div className="text-2xl border rounded p-2">
                         <span className="text-yellow-400 hover:text-yellow-500">BACK END DEVELOPMENT</span>
                        <span className="text-lg text-white"> (NodeJs, Express, Serverless Framework, AWS Lambda, Java, C#) </span>
                    </div>
                    <div className="text-2xl border rounded p-2">
                         <span className="text-green-400 hover:text-green-500">MISCELLANEOUS</span>
                        <span className="text-lg text-white"> (MongoDB, Microsoft SQL, AWS S3, REST APIs, WordPress CMS, Git, AWS
                            CloudFront, Microsoft Office 365, Microsoft Power Automate, Microsoft Sharepoint) </span>
                    </div>
                </div>
                
            </div>
        </div>
    </experience>
  );
};

export default Experience;
