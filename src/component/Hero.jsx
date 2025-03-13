import React from "react";

const Hero = () => {
  return (
    <div className="bg-slate-100 text-black text-center py-16">
      <img
        src="/add.jpg"
        alt="Hero"
        className=" bg-orange-500 mx-auto w-48 h-48 rounded-full object-cover"
      />
      <h1 className="text-3xl font-bold mt-4">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Fullstack Developer
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-800 px-4 md:px-32">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gray-400 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
          Connect with Me
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
