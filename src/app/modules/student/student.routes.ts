import express from 'express'
import { StudentControllers } from './student.controller'

/**
 * This router is an object
 */
const router=express.Router()

router.post('/create-student',StudentControllers.createStudent)

router.get('/',StudentControllers.getAllStudents)

router.get('/:studentID',StudentControllers.getStudentByID)

export const StudentRouters=router