import express from "express";

import { addNeedDonation , viewNeed , deleteNeed , viewByEmail } from './../controllers/need.js';

const router = express.Router();

router.post("/addNeed", addNeedDonation);
router.use("/viewNeed", viewNeed);
router.use("/viewByEmail/:email", viewByEmail);
router.use('/deleteNeed/:id', deleteNeed);


export default router;
