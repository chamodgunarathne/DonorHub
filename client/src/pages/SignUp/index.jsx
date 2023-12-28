import React, { useState } from "react";
import Back_02 from "../../assests/images/Back_02.svg";
import NavBar from "../../components/navbar/Navbar";
import logo from "../../assests/images/Logo.png";
import TextField from "../../components/Text_Field";
import { Link, redirect } from "react-router-dom";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Index = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    district: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      password: formData.password,
      district: formData.district,
      mobile: formData.mobile,
    };

    // Check if email or password is missing and display an error message
    if (!userData.email || !userData.password) {
      window.alert("Email and password are required.");
      return; // Exit the function to prevent the API call
    }

    try {
      const response = await fetch("http://localhost:8000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        window.alert("Successfully Registered");
        window.location.href = '/sign-in'; 
        setRegistrationSuccess(true);
        // User successfully registered
        // You can redirect to a login page or perform other actions here
      } else if (response.status === 409) {
        // Email already exists, display an error message to the user
        const data = await response.json();
        window.alert(data.message);
      } else {
        // Handle other registration errors, e.g., display a generic error message
        console.error("Registration failed:", response.statusText);
        window.alert("Registration failed");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      window.alert("Registration failed");
    }
  };

  return (
    <div>
   
        <div className="grid grid-cols-5 bg-slate-200">
          <div className="col-span-2 flex  justify-center items-center">
            <div className="p-20 flex  flex-col justify-center items-center text-center">
              <img src={logo} alt="logo" className="w-3/4" />
              <br />
              <br />
              <br />
              <h1 className="text-2xl font-semibold">Sign Up to goDonateMe</h1>
            </div>
          </div>
          <div className="flex justify-center items-center h-screen col-span-3">
            <div className="bg-white rounded-2xl p-4 h-4/5 w-4/5 m-4">
              <div className="m-4 flex justify-end mr-10">
                <p className="text-lg tracking-wide font-normal ">
                  Already have an Account?{" "}
                  <Link
                    to="/sign-in"
                    className="text-green-700 font-bold hover:text-blue-600"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
              <div className="m-10">
                <br />
                <p className="text-xl font-medium tracking-wide font-sans">
                  Enter Your details to sign in
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="ml-10 mr-10">
                  <div className="grid grid-cols-2 ">
                    <div className="mr-1">
                      <TextField
                        name="fname"
                        type="text"
                        label=""
                        placeholder="First Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="ml-1">
                      <TextField
                        name="lname"
                        type="text"
                        label=""
                        placeholder="Last Name"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <TextField
                    name="email"
                    type="text"
                    label=""
                    placeholder="E-mail Address"
                    onChange={handleChange}
                  />
                  <TextField
                    name="password"
                    type="password"
                    label=""
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <TextField
                    name="district"
                    type="text"
                    label=""
                    placeholder="District"
                    onChange={handleChange}
                  />
                  <TextField
                    name="mobile"
                    type="text"
                    label=""
                    placeholder="Mobile Number"
                    onChange={handleChange}
                  />
                </div>

                <div className="pt-5 mt-10">
                  <hr className="w-5-6 h-4 ml-10 mr-10  " />
                </div>

                <div className="flex justify-end mr-10">
                  <button
                    type="submit"
                    className="!bg-green-600   border-green-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[15px] hover:scale-125"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default Index;
