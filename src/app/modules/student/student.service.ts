import { TStudent } from "./student.interface";
import { Student } from "./student.model";

/**
 * This function creates a student data in database.
 * @param studentData A Student type data
 * @returns {Object} A result response data after inserting into database containig success and other infos
 */
const createStudentIntoDB=async (studentData:TStudent)=>{
    //const result=await Student.create(student) //builtin static method
    
    //Custom instance method
    const student=new Student(studentData)
    if(await student.isUserExists(studentData.id)){
        throw new Error("User already Exists")
    }
    const result=await student.save()
    return result
}

/**
 * Method to get all students data docs from database
 * @returns Entire array of data 
 */
const getAllStudentsFromDB=async()=>{
    const result=await Student.find()
    return result
}

/**
 * Get a single data student by their ID
 * @param id ID(string) of the student we want to find
 * @returns Single data of the student of that ID
 */
const getStudentByIDfromDB=async(id:string)=>{
    const result=Student.findOne({id:id})
    return result;
}

export const StudentServices={
    createStudentIntoDB,
    getAllStudentsFromDB,
    getStudentByIDfromDB
}