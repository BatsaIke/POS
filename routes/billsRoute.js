import express from "express";
import { createBills,getBills } from "../controller/billsController.js";

const billsRoute = express.Router();

billsRoute.route("/bills").post(createBills);
billsRoute.route("/bills").get(getBills);


export default billsRoute;
