import { Request, Response } from "express";
import { StudentServices } from "./student.service";

/**
 * Creates student entity with data.This function will call service function to get data.Check student.service.ts .
 * @param req a request data from route.ts
 * @param res json object containing desired expected data for the clients and other info like message
 */
const createStudent=async (req:Request,res:Response)=>{
    try {
        const student=req.body
        const result = await StudentServices.createStudentIntoDB(student);
        res.status(200).json({
            success:true,
            message:"Student created successfully",
            data:result
        })    
    } catch (error) {
        console.log(error)
    }
    
}

export const StudentControllers={
    createStudent
}