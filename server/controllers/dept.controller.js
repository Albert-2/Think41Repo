import Department from "../models/department.model.js";

// GET all departments
export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find({});
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch departments",
      error: error.message,
    });
  }
};

// GET a department by ID
export const getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findById(id);
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch department",
      error: error.message,
    });
  }
};

// POST a new department
export const createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const existing = await Department.findOne({ name: name.trim() });
    if (existing) {
      return res.status(409).json({ message: "Department already exists" });
    }

    const department = new Department({ name: name.trim() });
    await department.save();
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create department",
      error: error.message,
    });
  }
};

// DELETE a department by ID
export const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Department.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Department not found" });
    }
    res.status(200).json({ message: "Department deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete department",
      error: error.message,
    });
  }
};
