import React, { useState, useEffect } from "react";
import TextField from "../../components/Text_Field";
import Button from "../../components/Button";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Index = () => {

  const [user, setUser] = useState([]);
  const [donation, setDonation] = useState([]);
  const [needDonation, setNeedDonation] = useState([]);
  const email = sessionStorage.uEmail;

  const [formData, setFormData] = useState({
    firstName: "", // Initialize with empty strings
    lastName: "",
    password: "",
    district: "",
    mobileNo: "",
  });

  const [password, setPassword] = useState({
    firstName: "", // Initialize with empty strings
    lastName: "",
    password: "",
    district: "",
    mobileNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setPassword({
      ...password,
      [name]: value,
    });
  };

  const handleDelete = async (id) => {
    // Ask the user for confirmation
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:8000/api/donation/deleteDonation/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          // Product deleted successfully, you can redirect or show a success message
          alert("Product deleted successfully!");
          // Remove the deleted product from the state
        } else {
          // Handle errors, show an error message, or log the error
          alert("Failed to delete product. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        // Handle the error (e.g., show an error message to the user)
      }
    }
    fetchDonation();
    fetchData();
  };

  const handleNeedDelete = async (id) => {
    // Ask the user for confirmation
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:8000/api/need/deleteNeed/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          // Product deleted successfully, you can redirect or show a success message
          alert("Product deleted successfully!");
          // Remove the deleted product from the state
        } else {
          // Handle errors, show an error message, or log the error
          alert("Failed to delete product. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        // Handle the error (e.g., show an error message to the user)
      }
    }
    fetchNeedData();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/api/user/updateUser/${email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("User details updated successfully!");
        fetchData(); // Fetch updated user details
      } else {
        alert("Failed to update user details. Please try again.");
      }
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handlePassowrd = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/api/user/updateUser/${email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(password),
        }
      );

      if (response.ok) {
        alert("Password updated successfully!");
        fetchData(); // Fetch updated user details
      } else {
        alert("Failed to update user details. Please try again.");
      }
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/user/getUser/${email}`
      );
      const json = await res.json();
      setUser(json.data[0]);

      setFormData({
        firstName: json.data[0].firstName,
        lastName: json.data[0].lastName,
        password: json.data[0].password,
        district: json.data[0].district,
        mobileNo: json.data[0].mobileNo,
      });

      setPassword({
        firstName: json.data[0].firstName,
        lastName: json.data[0].lastName,
        district: json.data[0].district,
        mobileNo: json.data[0].mobileNo,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDonation = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/donation/viewByEmail/${email}`
      );
      const json = await res.json();
      setDonation(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchNeedData = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/need/viewByEmail/${email}`
      );
      const json = await res.json();
      setNeedDonation(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("cc0", donation);

  console.log("user d : ", user.email);

  useEffect(() => {
    fetchNeedData();
    fetchData();
    fetchDonation();
  }, [email]);


  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <div className="rounded-2xl bg-slate-300 m-10 p-10">
        <h1 className="text-xl font-bold tracking-wider m-10">
          Account Details
        </h1>
        <form onSubmit={handleUpdate}>
          <br />
          <div className="ml-10 mr-10">
            <div className="grid grid-cols-2 ">
              <div className="mr-1">
                <TextField
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={formData.firstName}
                />
              </div>
              <div className="ml-1">
                <TextField
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </div>
            </div>

            <TextField
              name="district"
              type="text"
              label="District"
              placeholder="District"
              onChange={handleChange}
              value={formData.district}
            />
            <TextField
              name="mobileNo"
              type="text"
              label="Mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
              value={formData.mobileNo}
            />
          </div>

          <div className="pt-5 mt-10">
            <hr className="w-5-6 h-4 ml-10 mr-10  " />
          </div>

          <div className="flex justify-end mr-10">
            <Button
              type="submit"
              className={twMerge(
                "  !bg-red-500   border-green-200 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[10px] hover:scale-125"
              )}
            >
              <span
                className={twMerge(
                  "!text-green-200 text-[10px] font-[900] uppercase tracking-[2px] hover:scale-110"
                )}
              >
                Update Account Details
              </span>
            </Button>
          </div>
        </form>
        <div className="ml-10 mr-10">
          <TextField
            name="password"
            type="password"
            label="Password"
            placeholder="Add new password here"
            onChange={handleChange}
            value={password.password}
          />
          <div className="pt-5 mt-10">
            <hr className="w-5-6 h-4 ml-10 mr-10  " />
          </div>
          <div className="flex justify-end ">
            <Button
              onClick={handlePassowrd}
              className={twMerge(
                "  !bg-blue-600   border-green-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[10px] hover:scale-125"
              )}
            >
              <span
                className={twMerge(
                  "!text-green-200 text-[10px] font-[900] uppercase tracking-[2px] hover:scale-110"
                )}
              >
                Update Password
              </span>
            </Button>
          </div>
        </div>

        <div></div>
      </div>

      <div className="flex  flex-col justify-center items-center">
        <h1 className="text-xl font-bold tracking-wider m-10">
          Donations Details
        </h1>
        <table className="w-full max-w-screen-xl rounded-xl p-8 shadow-2xl">
          <thead>
            <tr>
              <th className="bg-blue-600 px-6 py-3 text-center text-xs font-semibold uppercase leading-4 tracking-wider text-gray-100">
                Item Name
              </th>
              <th className="bg-blue-600 px-6 py-3 text-center text-xs font-semibold uppercase leading-4 tracking-wider text-gray-100">
                Quantity
              </th>
              <th className="bg-blue-600 px-6 py-3 text-center text-xs font-semibold uppercase leading-4 tracking-wider text-gray-100">
                Image
              </th>
              <th className="bg-blue-600 px-6 py-3 text-center text-xs font-semibold uppercase leading-4 tracking-wider text-gray-100">
                Actions
              </th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {donation ? (
              donation.map((option, index) => (
                <tr key={option._id} className="hover:bg-gray-50 ">
                  <td className="whitespace-nowrap px-6 py-4 text-sm leading-5 text-gray-800">
                    {option.item}
                  </td>
                  <td className=" whitespace-nowrap px-6 py-4 text-sm leading-5 text-gray-800">
                    {option.quantity}
                  </td>
                  <td className=" flex justify-center items-center whitespace-nowrap px-6 py-4 text-sm leading-5 text-gray-800">
                    <img
                      src={option.image}
                      className="rounded-2xl border opacity-[1] duration-300 ease-in hover:scale-125 hover:border-gradient-yellow-900 hover:opacity-[1] md:h-[30px] md:min-w-[20px] lg:h-[80px]"
                      alt={option.item}
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm leading-5 text-gray-800">
                    <div className="flex justify-center items-center">
                      <button
                        className="bg-red-600 rounded-xl w-1/3 text-white h-full"
                        onClick={() => handleDelete(option._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              // Display a message or component when there's no data
              <tr>
                <td colSpan="4">No data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/**need donation */}

      <div className="flex  flex-col justify-center items-center">
        <h1 className="text-xl font-bold tracking-wider m-10">
          Need Donations Details
        </h1>
        <table className="w-full max-w-screen-xl rounded-xl p-8 shadow-2xl">
          <thead>
            <tr>
              <th className="bg-green-600 px-6 py-3 text-center text-xs font-semibold uppercase leading-4 tracking-wider text-gray-100">
                Item Name
              </th>
              <th className="bg-green-600 px-6 py-3 text-center text-xs font-semibold uppercase leading-4 tracking-wider text-gray-100">
                Description
              </th>

              <th className="bg-green-600 px-6 py-3 text-center text-xs font-semibold uppercase leading-4 tracking-wider text-gray-100">
                Actions
              </th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
  {needDonation ? (
    needDonation.map((option, index) => (
      <tr key={option._id} className="hover:bg-gray-50 ">
        <td className="whitespace-nowrap px-6 py-4 text-sm leading-5 text-gray-800">
          {option.item}
        </td>
        <td className=" whitespace-nowrap px-6 py-4 text-sm leading-5 text-gray-800">
          {option.description}
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm leading-5 text-gray-800">
          <div className="flex justify-center items-center">
            <button
              className="bg-red-600 rounded-xl w-1/3 text-white h-full"
              onClick={() => handleNeedDelete(option._id)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    ))
  ) : (
    // Display a message or component when there's no data
    <tr>
      <td colSpan="4">No data available.</td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default Index;
