import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema=new Schema<TUser>({
    id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    needsPasswordChange:{
        type:Boolean,
        required:true
    },
    role:{
        type:String,
        enum:['student','faculty','admin']
    },
    status:{
        type:String,
        enum:['in-progress','blocked'],
        default:'in-progress'
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

export const User=model<TUser>('user',userSchema)