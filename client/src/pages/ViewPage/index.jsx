import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const [category, setCategory] = useState([]);

  const [mobile, setMobile] = useState({
    mobileNo: "",
  });
  const [user, setUser] = useState([]);
  const { id } = useParams();
  console.log("id:", id);


  const fetchData = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/donation/viewById/${id}`
      );
      const json = await res.json();
      setCategory(json.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const email =  category.email;


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
    fetchData();
  }, [id]);

  return (
    <div>
      <div>
        <br />
        <br />
        <div className="flex p-4">
          <div style={{ flex: "4" }}>
            <img
              src={category.image}
              alt="item image"
              className="m-10 border-4 border-green-600 rounded-xl shadow-2xl"
            />
          </div>
          <div
            style={{ flex: "3" }}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col justify-center items-center">

              <h1 className="text-black text-3xl font-bold">{category.item}</h1>
              <br />
              <div className="justify-left">
              <h1>Quantity : {category.quantity}</h1>
              <br />
              <h1>Contact : {category.email}  </h1>
              <br />
              <h1>Mobile : {mobile.mobileNo}  </h1>
              <br />
              <h1>Description : {category.description}  </h1>
              </div>
              

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Index;
