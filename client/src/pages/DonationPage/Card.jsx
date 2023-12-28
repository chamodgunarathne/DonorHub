import React from "react";
import { NavLink  } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Button from "../../components/Button";

const Card = ({ _id , title, description, image, quantity }) => {
 
  const url = `/view/${_id}`;
  return (
    <div className="bg-green-200 rounded-lg shadow-2xl p-5 border-1 border-green-600">
      {image && (
        <div className="image-container" style={{ height: "200px" }}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
      )}
      <div className="flex p-4">
        <div style={{ flex: "3" }}>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <br />
          <p className="text-gray-600">Item Quantity: {quantity}</p>
        </div>
        <div style={{ flex: "1" }} className="flex justify-center items-center">
          <Button
            as={NavLink}
            to={url}
            className={twMerge(
              "  !bg-blue-800   border-blue-700 border-2 border-solid  px-[30px] py-[15px]  lg:px-[15px] lg:py-[15px] hover:scale-125"
            )}
          >
            <span
              className={twMerge(
                "!text-green-200 text-[12px] font-[900] uppercase tracking-[2px] hover:scale-110"
              )}
            >
              View
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
