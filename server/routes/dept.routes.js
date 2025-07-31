import express from "express";
import {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  deleteDepartment,
  getProductsByDepartmentId,
} from "../controllers/dept.controller.js";

const router = express.Router();

// router.get("/", getAllDepartments); // GET /api/departments
// router.get("/:id", getDepartmentById); // GET /api/departments/:id
// router.post("/", createDepartment); // POST /api/departments
// router.delete("/:id", deleteDepartment); // DELETE /api/departments/:id
router.get("/:id/products", getProductsByDepartmentId);
export default router;
