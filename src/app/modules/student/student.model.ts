import {Schema,model,connect} from 'mongoose'
import { Gurdian, LocalGurdian, Student, UserName } from './student.interface'
import validator from 'validator'

/**
 * Creating schema
 */

const userNameSchema=new Schema<UserName>({
    firstName:{
        type:String,
        required:[true,"Name reqired"],
        trim:true,
        maxlength:[20,"Name must between 20 characters"],
        validate:{
            validator:function(value:string){
                const firstNameStr:string=value.charAt(0).toUpperCase()+value.slice(1)
                return firstNameStr === value
            },
            message:"{VALUE} is not in capitalize formate"
        }
    },
    middleName:{type:String},
    lastName:{
        type:String,
        required:[true,"Last name missing"],
        validate:{
            validator:(value:string)=>validator.isAlpha(value),
            message:"{VALUE} is not valid.Remove externel characters"
        }
    }
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
    id:{type:String,required:true,unique:true},
    name:{type:userNameSchema,required:true},
    gender:{
        type:String,
        enum:{
            values:["male","female"],
            message:"Gender must be one of these MALE or FEMALE"
        },
        required:[true,"Gender field required"],
    },
    dateOfBirth:{type:String},
    email:{
        type:String,
        required:[true,"Email required"],
        validate:{
            validator:(value:string)=>validator.isEmail(value),
            message:"Not a valid email"
        }
    },
    contactNo:{type:String,required:true},
    emergencyContactNo:{type:String,required:true},
    bloodGroup:{
        type:String,
        enum:['A+','A-','B+','B-','AB+','O+','O-'],
    },
    presentAddress:{type:String,required:true},
    permanantAddress:{type:String,required:true},
    guardian:{type:gurdianSchema,required:[true,"Gurdian Info is required"]},
    localGurdian:localGurdianSchema,
    profileImg:{type:String},
    isActive:{
        type:String,
        enum:["active","inactive"],
        default:"active"
    }
})

/**
 * Student Model for DB query depending on Schema
 */
export const StudentModel=model<Student>('Student',studentSchema) 