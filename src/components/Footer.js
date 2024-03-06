import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row justify-center gap-3">
      <a className="text-blue border rounded-full p-2 border-pale-blue hover:border-blue hover:bg-blue hover:text-white" href="https://facebook.com">
        <FaFacebookF />
      </a>
      <a className="text-blue border rounded-full p-2 border-pale-blue hover:border-blue hover:bg-blue hover:text-white" href="https://facebook.com">
        <FaTwitter  />
      </a>
      <a className="text-blue border rounded-full p-2 border-pale-blue hover:border-blue hover:bg-blue hover:text-white" href="https://facebook.com">
        <FaInstagram />
      </a>
      </div>

     

      <p className="flex justify-center py-7 text-[10px] text-gray">
        © Copyright Ping. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
