import express from "express";
import cors from "cors";
import coneectDB from "./database/dbConnect.js";
import importRoutes from "./routes/import.routes.js";
import productRoutes from "./routes/products.routes.js";
import dotenv from "dotenv";
dotenv.config();
coneectDB();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(cors());

//routes
app.use("/api/import", importRoutes);
app.use("/api/products", productRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

// routes
app.get("/", (req, res) => {
  res.send(`API is running on port ${process.env.PORT || 3000}`);
});
