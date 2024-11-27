import { handleValidationError } from "../middlewares/errorHandler.js";
import { Admin } from "../models/adminRegisterSchema.js";
import { Student, Teacher } from "../models/usersSchema.js"; // Combined import

// Admin Sign-In Logic
export const adminSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (!existingAdmin) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const isPasswordValid = await existingAdmin.isValidPassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({
      success: true,
      message: "Admin signed in successfully",
    });
  } catch (err) {
    next(err);
  }
};

// Student Sign-In Logic
export const studentSignIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    // TODO: Add logic to authenticate student
    res.status(200).json({
      success: true,
      message: "Student signed in successfully",
    });
  } catch (err) {
    next(err);
  }
};

// Teacher Sign-In Logic
export const teacherSignIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    // TODO: Add logic to authenticate teacher
    res.status(200).json({
      success: true,
      message: "Teacher signed in successfully",
    });
  } catch (err) {
    next(err);
  }
};
