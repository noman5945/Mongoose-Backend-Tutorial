import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

/**
 * This function creates a student data in database.
 * @param student A Student type data
 * @returns {Object} A result response data after inserting into database containig success and other infos
 */
const createStudentIntoDB=async (student:Student)=>{
    const result=await StudentModel.create(student)
    return result
}

/**
 * Method to get all students data docs from database
 * @returns Entire array of data 
 */
const getAllStudentsFromDB=async()=>{
    const result=await StudentModel.find()
    return result
}

/**
 * Get a single data student by their ID
 * @param id ID(string) of the student we want to find
 * @returns Single data of the student of that ID
 */
const getStudentByIDfromDB=async(id:string)=>{
    const result=StudentModel.findOne({id:id})
    return result;
}

export const StudentServices={
    createStudentIntoDB,
    getAllStudentsFromDB,
    getStudentByIDfromDB
}