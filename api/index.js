import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import multer from "multer";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import contactRoutes from './routes/contact.js'

const app = express();

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));
app.use(cookieParser());
app.use("/api/contact", contactRoutes)

app.listen(8803,()=>{
    console.log("Connected!")
})
