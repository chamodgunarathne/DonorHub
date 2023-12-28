import React, { useState, useEffect } from "react";
import { NavLink  } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Button from "../../components/Button";





const Card = ({ _id, title, description, image , email }) => {

  const [mobile, setMobile] = useState({
    mobileNo: "",
  });
  const [user, setUser] = useState([]);

  const fetchUserData = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/user/getUser/${email}`
      );
      const json = await res.json();
      setUser(json.data[0]);

      setMobile({
        mobileNo: json.data[0].mobileNo,
      });

      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="bg-green-400 rounded-lg shadow-2xl p-5 border-1 border-green-600">
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
          <h2 className="text-2xl font-semibold">{title}</h2><br/>
          <h2 className="text-lg ">Description : {description}</h2>
          <h2 className="text-lg ">Email : {email}</h2>
          <h2 className="text-lg ">Mobile : {mobile.mobileNo}</h2>
          <br />
        </div>
      
      </div>
    </div>
  );
};

export default Card;