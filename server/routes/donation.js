import express from "express";

import { addDonation , view , viewById ,  viewByEmail , deleteProduct } from './../controllers/donation.js';

const router = express.Router();

router.post("/addDonation", addDonation);
router.use("/viewDonation", view);
router.use("/viewById/:id", viewById);
router.use("/viewByEmail/:email", viewByEmail);
router.use('/deleteDonation/:id', deleteProduct);


export default router;
