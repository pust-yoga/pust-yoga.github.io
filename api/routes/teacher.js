import express from 'express'
import { getTeachers, getTeacher } from '../controllers/teacher.js'

const router = express.Router()

router.get('/', getTeachers)
router.get('/:id', getTeacher)

export default router