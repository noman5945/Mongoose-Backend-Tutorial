import {Schema,model,connect} from 'mongoose'

export type Gurdian={
    fatherName:string;
    fatherOccupation:string;
    fatherContactNo:string;
    motherName:string;
    motherOccupation:string;
    motherContactNo:string;
}

export type UserName={
    firstName:string;
    middleName:string;
    lastName:string;
}

export type LocalGurdian={
    name:string;
    occupation:string;
    address:string;
    contactNo:string;
}

export type Student= {
    id:string;
    name:UserName;
    gender:"male"|"female";
    dateOfBirth:string;
    email:string;
    contactNo:string;
    emergencyContactNo:string;
    bloodGroup:'A+'|'A-'|'B+'|'B-'|'AB+'|'O+'|'O-';
    presentAddress:string;
    permanantAddress:string; 
    guardian:Gurdian;
    localGurdian:LocalGurdian;
    profileImg?:string;
    isActive:'active'|"inactive"
}