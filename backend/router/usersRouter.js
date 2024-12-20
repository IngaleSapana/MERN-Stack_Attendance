import express from "express";
import { studentSignIn, teacherSignIn, adminSignIn } from "../controllers/usersControllers.js";

const router = express.Router();

// Routes for sign-in
router.post("/student/signin", studentSignIn);
router.post("/teacher/signin", teacherSignIn);
router.post("/admin/signin", adminSignIn); // Admin route added for consistency

export default router;
