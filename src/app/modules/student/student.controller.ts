import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentValidatorSchema from "./student.validator";

/**
 * Creates student entity with data.This function will call service function to get data.Check student.service.ts .
 * @param req a request data from route.ts
 * @param res json object containing desired expected data for the clients and other info like message
 */
const createStudent=async (req:Request,res:Response)=>{
    try {
        /**
         * TO DO: Implement JOI validator for request body
         * Check student.validators.ts
         */
        
        const student=req.body
        const {error,value}=studentValidatorSchema.validate(student,{allowUnknown:true})
        
        if(error){
            res.status(500).json({
                success:false,
                message:"Error occured while create Student data(Joi)",
                error:error.details
            })
        }else{
            const result = await StudentServices.createStudentIntoDB(value);
        
            res.status(200).json({
                success:true,
                message:"Student created successfully",
                data:result
            })
        }
    } catch (error:any) {
        res.status(500).json({
            success:false,
            message:error.message||"Error occured while create Student data",
            error:error
        })
    }
    
}

const getAllStudents=async(req:Request,res:Response)=>{
    try {
        
        const result = await StudentServices.getAllStudentsFromDB()
        res.status(200).json({
            success:true,
            message:"Students data retrived successfully",
            data:result
        }) 
    } catch (error:any) {
        res.status(500).json({
            success:false,
            message:error.message||"Error occured while retrieve Student data",
            error:error
        })
    }
}

/**
 * Method to get single data doc of student by ID
 * @param req Student ID given in the router link as parameter (studentID)
 * @param res An object data if data by that ID exists or null if no data by that ID
 */
const getStudentByID=async(req:Request,res:Response)=>{
    try {
        const queryID=req.params.studentID
        const result=await StudentServices.getStudentByIDfromDB(queryID)
        res.status(200).json({
            success:true,
            message:"Student data retrived successfully",
            data:result
        })
    } catch (error:any) {
        res.status(500).json({
            success:false,
            message:error.message||"Error occured while get a Student data",
            error:error
        })
    }
}

/**
 * Method to delete single data doc of student by ID
 * @param req Student ID given in the router link as parameter (studentID)
 * @param res An object data if data by that ID exists or null if no data by that ID
 */
const deleteStudentByID=async(req:Request,res:Response)=>{
    try {
        const queryID=req.params.studentID
        const result=await StudentServices.deleteStudentByID(queryID)
        res.status(200).json({
            success:true,
            message:"Student data deleted successfully",
            data:result
        })
    } catch (error:any) {
        res.status(500).json({
            success:false,
            message:error.message||"Error occured while deleting a Student data",
            error:error
        })
    }
}

export const StudentControllers={
    createStudent,
    getAllStudents,
    getStudentByID,
    deleteStudentByID
}