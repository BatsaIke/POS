import express from "express";
import {
  getProductController,
  createProducts,
  updateProduct,
  deleteProduct
} from "../controller/productsController.js";

const productRouter = express.Router();

productRouter.route("/").get(getProductController).post(createProducts);
productRouter.route("/update").put(updateProduct);
productRouter.route("/delete").post(deleteProduct);
export default productRouter;
