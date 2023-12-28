import bcryptjs from "bcryptjs";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  const { fname, lname, email, password, district, mobile } = req.body;

  if (!email || !password) {
    return next(
      createError({
        message: "Email & password are required",
        statusCode: 400,
      })
    );
  }

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      // Email already exists, send a 409 (Conflict) status code as a response
      return res.status(409).json({ message: "Email is already exists!" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      firstName: fname,
      lastName: lname,
      email: email,
      password: hashedPassword,
      mobileNo: mobile,
      district: district,
    });

    await newUser.save();
    return res.status(201).json({ message: "New User Created" });
  } catch (err) {
    return next(
      createError({
        message: "Internal Server Error",
        statusCode: 500,
      })
    );
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // User is authenticated, you can generate a token here and send it in the response
    // For token-based authentication, you might use a library like jsonwebtoken
    // const token = generateAuthToken(user);

    res.status(200).json({ message: 'Login successful', user: user /*, token */ });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const getUserById = async (req, res, next) => {

  const email = req.params.email;
  console.log( "email", email);
  
  try {
    const user = await User.find({ email }); // Find donations based on the _id
    if (!user || user.length === 0) {

      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ data: user, message: "Success" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }

  // res.json("Sucess");
};


export const updateUser = async (req, res) => {
  try {
    const email = req.params.email;
    const { firstName, lastName, district, mobileNo, password } = req.body;

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const existingProduct = await User.findOne({ email: email });

    if (!existingProduct) {
      return res.status(404).json({ message: "User not found" });
    }

    existingProduct.firstName = firstName;
    existingProduct.lastName = lastName;
    existingProduct.email = email;
    existingProduct.district = district;
    existingProduct.mobileNo = mobileNo;
    existingProduct.password = hashedPassword;

    await existingProduct.save();

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
};

