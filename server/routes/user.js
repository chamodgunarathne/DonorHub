import express from "express";

import { register , login , getUserById , updateUser } from "../controllers/user.js";


const router = express.Router();

router.post("/register", register);
router.use("/login", login);

router.use("/getUser/:email", getUserById);
router.use("/updateUser/:email", updateUser);



export default router;
