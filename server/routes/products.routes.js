import express from "express";
import {
  getAllProducts,
  getProductById,updateProduct
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct); // Assuming updateProduct is defined in products.controller.js

export default router;
