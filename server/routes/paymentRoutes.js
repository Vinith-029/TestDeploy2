import express from "express";
import {
  checkout,
  paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();

router.route("https://testlogiship.onrender.com/checkout").post(checkout);

router.route("https://testlogiship.onrender.com/paymentverification").post(paymentVerification);

export default router;