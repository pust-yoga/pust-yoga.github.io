import express from "express";
import { getActivitiesByTeacher, getTeachersByActivity } from "../controllers/teacher_activity.js";

const router = express.Router();

// Route for getting all activities by teacher id
router.get("/teacher/:teacherId/activities", getActivitiesByTeacher);

// Route for getting all teachers by activity id
router.get("/activity/:activityId/teachers", getTeachersByActivity);

export default router;