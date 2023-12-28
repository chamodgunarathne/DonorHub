import React from "react";
import logo from "../../assests/images/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white py-4">
      <div className="container mx-auto text-center w-screen">
        <div className="flex flex-row w-full justify-center items-center">
          <div className="flex flex-col w-full justify-center items-center">
            <img src={logo} alt="logo" />
            <br />
            <p className="text-slate-900">
              goDonateMe is dedicated to providing
              <br /> you with the tools you need to raise
              <br /> money for whatever your cause may be.
            </p>
          </div>
          <div className="flex flex-col w-full justify-center">
            <Link
              to="/aboutus"
              className="text-2xl font-semibold text-green-900"
            >
              About Us
            </Link>

            <Link to="/" className="text-lg text-green-900">
              Pricing
            </Link>
            <Link to="/" className="text-lg text-green-900">
              Privacy policy
            </Link>
            <Link to="/" className="text-lg text-green-900">
              About Us
            </Link>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <p className="text-black">
          &copy; {new Date().getFullYear()} Chanuka Dilranga
        </p>
        <p className="text-black">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
