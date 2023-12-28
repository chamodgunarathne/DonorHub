import React, { useState } from "react";
import logo from "../../assests/images/Logo.png";
import TextField from "../../components/Text_Field";
import Button from "../../components/Button";
import { Link , useNavigate  } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    const { email, password } = formData;

    if (!email || !password) {
      window.alert("Email and password are required.");
      return;
    }

    try {

      const response = await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        // Handle a successful login
        window.alert("Login successful");
        sessionStorage.setItem("uEmail", email);
        navigate("/"); 
        // You can also handle token storage or redirection to another page here.
      } else {
        // Handle login failure
        const data = await response.json();
        window.alert(data.error);
      }
    } catch (error) {
      console.error("Login failed:", error);
      window.alert("Login failed");
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
            <h1 className="text-2xl font-semibold">Sign In to goDonateMe</h1>
          </div>
        </div>

        <div className="flex justify-center items-center h-screen col-span-3">
          <div className="bg-white rounded-2xl p-4 h-4/5 w-4/5 m-4">
            <div className="m-4 flex justify-end mr-10">
              <p className="text-lg tracking-wide font-normal ">
                Don't have an Account?{" "}
                <Link
                  to="/sign-up"
                  className="text-green-700 font-bold hover:text-blue-600"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="m-10">
              <br />
              <p className="text-xl font-medium tracking-wide font-sans">
                Enter Your Login credentials
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-10">
                <TextField
                  name="email"
                  type="text"
                  label=""
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="p-10">
                <TextField
                  name="password"
                  type="password"
                  label=""
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="pt-5">
                <hr className="w-5-6 h-4 m-10 " />
              </div>

              <div className="flex justify-end mr-10">
                <Button
                  type="submit"
                  className="!bg-green-800 border-green-400 border-2 border-solid px-[30px] py-[20px] lg:px-[15px] lg:py-[15px] hover:scale-125"
                >
                  <span className="!text-green-200 text-[15px] font-[900] uppercase tracking-[2px] hover:scale-110">
                    Sign In
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
