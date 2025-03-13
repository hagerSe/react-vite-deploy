import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-2" id="About">
      <div className="container mx-auto px-6 md:px-10 lg:px-2">
        <h1 className="text-2xl font-bold text-center mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
         
          <div className="flex-1">
            <p className="text-lg mb:-8">
              I am a passionate full stack developer with a focus on building
              modern and responsive web applications, with a strong foundation
              in both frontend and backend development technologies.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="HTMLand css">HTML & CSS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="Node.js"> NODE.JS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="React">REACT</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1 flex justify-between text-center">
            <div>
              <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                1+
              </h3>
              <p>Years of exprience  </p>
            </div>
            <div>
              <h3 className="text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                11+
              </h3>
              <p>projects complets</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
