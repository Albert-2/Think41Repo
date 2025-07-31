import express from "express";
import multer from "multer";
import csv from "csv-parser";
import fs from "fs";
import Product from "../models/products.model.js";

const router = express.Router();

// Set up multer to handle file upload
const upload = multer({ dest: "uploads/" });

router.post("/upload-csv", upload.single("file"), async (req, res) => {
  const results = [];
  const filePath = req.file.path;

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => {
      // Parse values into correct types
      results.push({
        id: Number(data.id),
        cost: parseFloat(data.cost),
        category: data.category,
        name: data.name,
        brand: data.brand,
        retail_price: parseFloat(data.retail_price),
        department: data.department,
        sku: data.sku,
        distribution_center_id: Number(data.distribution_center_id),
      });
    })
    .on("end", async () => {
      try {
        await Product.insertMany(results, { ordered: false });
        fs.unlinkSync(filePath); // Delete file after processing
        res.status(200).json({ message: "CSV data imported successfully!" });
      } catch (err) {
        fs.unlinkSync(filePath);
        res
          .status(500)
          .json({ error: "Error importing data", details: err.message });
      }
    })
    .on("error", (err) => {
      res
        .status(500)
        .json({ error: "Error reading CSV file", details: err.message });
    });
});

export default router;
