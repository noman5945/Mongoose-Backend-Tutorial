import {Schema,model,connect} from 'mongoose'
import { Gurdian, LocalGurdian, Student, UserName } from './student.interface'

/**
 * Creating schema
 */

const userNameSchema=new Schema<UserName>({
    firstName:{type:String,required:true},
    middleName:{type:String},
    lastName:{type:String,required:true}
})

const gurdianSchema=new Schema<Gurdian>({
    fatherName:{type:String,required:true},
    fatherContactNo:{type:String,required:true},
    fatherOccupation:{type:String,required:true},
    motherName:{type:String,required:true},
    motherContactNo:{type:String,required:true},
    motherOccupation:{type:String,required:true},
})

const localGurdianSchema=new Schema<LocalGurdian>({
    name:{type:String,required:true},
    occupation:{type:String,required:true},
    address:{type:String,required:true},
    contactNo:{type:String,required:true},
})

const studentSchema=new Schema<Student>({
    id:{type:String},
    name:userNameSchema,
    gender:["male","female"],
    dateOfBirth:{type:String},
    email:{type:String,required:true},
    contactNo:{type:String,required:true},
    emergencyContactNo:{type:String,required:true},
    bloodGroup:['A+','A-','B+','B-','AB+','O+','O-'],
    presentAddress:{type:String,required:true},
    permanantAddress:{type:String,required:true},
    guardian:gurdianSchema,
    localGurdian:localGurdianSchema,
    profileImg:{type:String},
    isActive:["active","inactive"]
})

/**
 * Student Model for DB query depending on Schema
 */
export const StudentModel=model<Student>('Student',studentSchema) 