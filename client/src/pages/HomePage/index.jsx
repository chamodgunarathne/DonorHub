import React, { useEffect, useState } from "react";
import Back_img from "../../assests/images/Back_01.svg";
import Back_02 from "../../assests/images/Back_02.svg";
import Image from "../../assests/images/Group2.png";
import NavBar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Index = () => {

  console.log("email : ", sessionStorage.uEmail);
  return (
    <>
      {/*  First section */}
      <div>
        <div
          style={{
            backgroundImage: `url(${Back_img})`,
            backgroundSize: "cover",
          }}
          className="w-m flex h-screen flex-col bg-repeat p-5 pt-[80px] text-black"
        >
          <div className="w-full grid md:flex col-span-2">
            <div className="grid w-full justify-center items-center ">
              <p className="text-[30px] md:text-[60px] font-bold pt-10 px-20">
                Simple, Powerful Fundraising
              </p>
              <p className="text-[15px] md:text-[25px] pb-20 px-20 py-10">
                Online forms, fundraising pages, and native integrations that
                help you engage donors, manage giving, and increase your
                revenue.
              </p>
            </div>
            <div className="w-full"></div>
          </div>
        </div>
      </div>

      {/* Second Section */}

      <div
        style={{
          backgroundImage: `url(${Back_02})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-screen flex-col bg-repeat p-5 pt-[80px]  text-black"
      >
        <div className="flex flex-col md:flex-row w-full h-screen">
          <div className="flex w-full">
            {/* <img src={img_01} alt="image 01"/> */}
          </div>
          <div className="grid w-full">
            <p className="text-[50px] font-bold pt-10 px-20">
              Fundraising on,
              <br />
              GoFundMe takes
              <br />
              just a few minutes
            </p>
            <p className="text-[25px] pb-20 px-20 py-10">
              Fundraising on GoFundMe
              <br /> takes just a few minutes
            </p>
            <div className="px-20">
              {sessionStorage.uEmail ? (
                <Button
                as={NavLink}
                to="/donation"
                className={twMerge(
                  "  !bg-green-800   border-green-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[15px] hover:scale-125"
                )}
              >
                <span
                  className={twMerge(
                    "!text-green-200 text-[15px] font-[900] uppercase tracking-[2px] hover:scale-110"
                  )}
                >
                  Start a Fundraiser !
                </span>
              </Button>
                
              ) : (

                <Button
                  as={NavLink}
                  to="/sign-in"
                  className={twMerge(
                    "  !bg-green-800   border-green-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[15px] hover:scale-125"
                  )}
                >
                  <span
                    className={twMerge(
                      "!text-green-200 text-[15px] font-[900] uppercase tracking-[2px] hover:scale-110"
                    )}
                  >
                    Start a Fundraiser !
                  </span>
                </Button>

                
              )}
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      {/* Third Section */}

      <div>
        <div
          style={{
            backgroundColor: "white",
            backgroundSize: "cover",
          }}
          className="w-m flex h-full md:h-screen flex-col bg-repeat p-5 pt-[80px]  text-black"
        >
          <div className="flex justify-center items-center text-[60px] font-bold ">
            Why Donate ?
          </div>
          <br />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 justify-arround  md:p-40 pt-4 h-full md:h-screen">
            <div className="grid bg-gray-200 rounded-lg  p-8">
              {/* Content for the second card */}
              <h2 className=" font-semibold text-[40px]">
                Simple to Use and Customize
              </h2>
              <p className="text-[20px] leading-10">
                We pride ourselves on making things easy to use - no code, no
                developers, and no training required.
              </p>
            </div>

            <div className="grid bg-gray-200 rounded-lg  p-8">
              {/* Content for the second card */}
              <h2 className="font-semibold text-[40px] ">
                Affordable, Scalable Pricing
              </h2>
              <p className="text-[20px] leading-10">
                Our pricing model scales with your donation volume and ensures
                no hidden fees or surprises.
              </p>
            </div>

            <div className="grid bg-gray-200 rounded-lg p-8">
              {/* Content for the third card */}
              <h2 className=" font-semibold text-[40px]">Safe and Secure</h2>
              <p className="text-[20px] leading-10">
                PCI and data privacy compliance with encryption and protection
                against cyber attacks
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* fourth section */}
      <div className="h-screen p-4 md:p-36 pt-10">
        <div
          className="h-screen rounded-3xl grid justify-center text-center leading-10 "
          style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-green-500 text-6xl font-medium pt-20 tracking-widest">
            Ready to get started? <br />
            Join thousands of others today.
          </p>

          <div className="px-20 py-10">
            <Button
              as={NavLink}
              to="/table-booking"
              className={twMerge(
                "rounded-[15px]  !bg-green-950   border-green-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[120px] lg:py-[40px]"
              )}
            >
              <span
                className={twMerge(
                  "!text-green-400 text-[25px] font-[900] uppercase tracking-[2px] hover:scale-110"
                )}
              >
                Get Started
              </span>
            </Button>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/>
    </>
  );
};

export default Index;
