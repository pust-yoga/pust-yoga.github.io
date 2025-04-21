import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import multer from "multer";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import teacherRoutes from './routes/teacher.js'
import activityRoutes from './routes/activity.js'
// import teacher_activityRoutes from './routes/teacher_activity.js'

const app = express();

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));
app.use(cookieParser());
app.use("/api/teacher", teacherRoutes)
app.use("/api/activity", activityRoutes)
// app.use("/api/teacher_activity", teacher_activityRoutes)

app.listen(8803,()=>{
    console.log("Connected!")
})
