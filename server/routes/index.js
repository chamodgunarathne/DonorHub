import express from "express";
import user from "./user.js";
import donation from "./donation.js";
import need from "./need.js";

const router = express.Router();

router.use("/user", user);
router.use("/donation", donation);
router.use("/need", need);


export default router;
