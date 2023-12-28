import bcryptjs from "bcryptjs";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import Donation from "../models/Donation.js";

export const addDonation = async (req, res, next) => {
    const { item , quantity , email,  description, mobileNo , image  } = req.body; 
   try{
      const newDonation = new Donation({
        item : item,
        quantity : quantity,
        email : email,
        description: description,
        mobileNo : mobileNo,
        image : image,
      });
  
      await newDonation.save();
      return res.status(201).json({ message: "New Donation Added" });
    } catch (err) {
      return next(
        createError({
          message: "Internal Server Error",
          statusCode: 500,
        })
      );
    }

  };

  export const view = async (req, res, next) => {
    try {
      const donations = await Donation.find();
      res.status(200).json({ data: donations, messege: "Success" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
    // res.json("Sucess");
  };

  export const viewById = async (req, res, next) => {
    const _id = req.params.id;
    
    try {
      const donations = await Donation.find({ _id }); // Find donations based on the _id
      if (!donations || donations.length === 0) {
        return res.status(404).json({ error: "Donation not found" });
      }
  
      res.status(200).json({ data: donations, message: "Success" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
    // res.json("Sucess");
  };

  export const viewByEmail = async (req, res, next) => {
    const email = req.params.email;
    console.log(email);
    
    try {
      const donations = await Donation.find({ email }); // Find donations based on the _id
      if (!donations || donations.length === 0) {
        return res.status(404).json({ error: "Donation not found" });
      }
  
      res.status(200).json({ data: donations, message: "Success" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
    // res.json("Sucess");
  };

  export const deleteProduct = async (req, res) => {
    const _id = req.params.id;
    console.log("id", _id);
  
    try {
      const deletedItem = await Donation.findByIdAndDelete({_id});
      if (!deletedItem) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting Product", error: error.message });
    }
  };

  

