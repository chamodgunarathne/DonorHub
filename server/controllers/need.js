import bcryptjs from "bcryptjs";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import Donation from "../models/Donation.js";
import Need from "../models/Need.js";

export const addNeedDonation = async (req, res, next) => {
    const { item , description, mobileNo , image , email  } = req.body; 
   try{
      const newDonation = new Need({
        item : item,
        description: description,
        mobileNo : mobileNo,
        image : image,
        email:email,
      });
  
      await newDonation.save();
      return res.status(201).json({ message: "New Need Donation Added" });
    } catch (err) {
      return next(
        createError({
          message: "Internal Server Error",
          statusCode: 500,
        })
      );
    }

  };

  export const viewNeed = async (req, res, next) => {
    try {
      const donations = await Need.find();
      res.status(200).json({ data: donations, messege: "Success" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
    // res.json("Sucess");
  };

  export const deleteNeed = async (req, res) => {
    const _id = req.params.id;
    console.log("id", _id);
  
    try {
      const deletedItem = await Need.findByIdAndDelete({_id});
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


  export const viewByEmail = async (req, res, next) => {
    const email = req.params.email;
    console.log(email);
    
    try {
      const donations = await Need.find({ email }); // Find donations based on the _id
      if (!donations || donations.length === 0) {
        return res.status(404).json({ error: "Donation not found" });
      }
  
      res.status(200).json({ data: donations, message: "Success" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
    // res.json("Sucess");
  };
