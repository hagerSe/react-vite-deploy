import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <h2 className="text-2xl font-bold text-center mb-10"> my contact</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Let's Talk</h3>
            <p className="mt-2">
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>

            <div className="mb-4 mt-8 flex items-center">
              <FaEnvelope className="text-green-400 mr-2" />
              <a
                href="mailto:agerneshderege8@gmail.com"
                className="hover:underline"
              >
                agerneshderege8@gmail.com
              </a>
            </div>

            <div className="mb-4 flex items-center">
              <FaPhone className="text-green-400 mr-2" />
              <span className="hover:underline">09 84 93 5677</span>
            </div>

            <div className="mb-4 flex items-center">
              <FaMapMarkerAlt className="text-green-400 mr-2" />
              <span className="hover:underline">Bahir Dar, Ethiopia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
