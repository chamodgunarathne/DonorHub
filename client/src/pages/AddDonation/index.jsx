import React, { useState } from "react";
import Back_02 from "../../assests/images/Back_02.svg";
import NavBar from "../../components/navbar/Navbar";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { NavLink , useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import TextField from "../../components/Text_Field";
import donation from "../../assests/images/don.png";
import ImageUpload from "../../components/Image_Upload";

const Index = () => {
  const navigate = useNavigate();
  const email = sessionStorage.uEmail;
  const [productData, setProductData] = useState({
    item: "",
    quantity: 0,
    number: "",
    description: "",
    imageBase64: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
    console.log(productData.item);
    console.log(productData.quantity);
    console.log(productData.number);
    console.log(productData.description);
    console.log(productData.imageBase64);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          // Ensure reader.result is a string
          setProductData({
            ...productData,
            imageBase64: reader.result,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !productData.item ||
      !productData.quantity ||
      !productData.number ||
      !productData.description ||
      !productData.imageBase64
    ) {
      alert("Please fill in all the fields");
      return; // Exit the function early if any field is empty
    }
    // Prepare the data to be sent to the server
    const formData = {
      item: productData.item,
      quantity: productData.quantity,
      number: productData.number,
      description: productData.description,
      image: productData.imageBase64,
      email:email,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/donation/addDonation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Success");
        alert("Item added to the system.");
        navigate("/donation"); 
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error("Error sending data to the server:", error);
    }
  };

  return (
    <div>
      <br />

      <div className="grid bg-gray-100 m-10 rounded-2xl md:h-screen p-10 md:grid-cols-6 shadow-2xl ">
        <div className="grid col-span-2 justify-center items-center">
          <h1 className="block text-gray-950 text-3xl font-semibold mb-4 tracking-wider">
            Add new Donation
          </h1>

          <img src={donation} alt="donation" className="w-3/4" />
        </div>
        <div className="col-span-4">

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <TextField
              name="item"
              type="text"
              label="Item"
              placeholder="Item"
              onChange={handleInputChange}
            />
            <br />
            <TextField
              name="quantity"
              type="number"
              label="Quantity"
              placeholder="Quantity"
              onChange={handleInputChange}
            />
            <br />
            <TextField
              name="description"
              type="text"
              label="Description"
              placeholder="Description"
              onChange={handleInputChange}
            />
            <br />
            <TextField
              name="number"
              type="number"
              label="Mobile Number"
              placeholder="Mobile Number"
              onChange={handleInputChange}
            />
            <div className="grid md:grid-cols-3">
              <div className="col-span-2">
                <br/>
                <h2 className="text-xl font-semibold text-gray-700 mb-4 px-1">Upload an Image</h2>
                <input
                  type="file"
                  id="pic"
                  name="pic"
                  accept="image/png, image/jpeg"
                  onChange={handleImageUpload}
                />
                {productData.imageBase64 && (
                  <div className="mb-4">
                    <img
                      src={productData.imageBase64}
                      alt="Uploaded Image"
                      className="max-w-md mx-auto h-48 w-48 border-4 rounded-full border-gray-700 shadow-2xl"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-center items-center">
                <div className="flex justify-end items-center">
                  <Button
                    as={NavLink}
                    onClick={handleSubmit}
                    className={twMerge(
                      "  !bg-blue-700   border-green-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[15px] hover:scale-125"
                    )}
                  >
                    <span
                      className={twMerge(
                        "!text-green-200 text-[15px] font-[900] uppercase tracking-[2px] hover:scale-110"
                      )}
                    >
                      Add Donation
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
