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

export const StudentServices={
    createStudentIntoDB
}