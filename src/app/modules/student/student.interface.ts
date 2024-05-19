import {Schema,model,connect, Model} from 'mongoose'

export type TGurdian={
    fatherName:string;
    fatherOccupation:string;
    fatherContactNo:string;
    motherName:string;
    motherOccupation:string;
    motherContactNo:string;
}

export type TUserName={
    firstName:string;
    middleName:string;
    lastName:string;
}

export type TLocalGurdian={
    name:string;
    occupation:string;
    address:string;
    contactNo:string;
}

export type TStudent= {
    id:string;
    password:string;
    name:TUserName;
    gender:"male"|"female";
    dateOfBirth:string;
    email:string;
    contactNo:string;
    emergencyContactNo:string;
    bloodGroup:'A+'|'A-'|'B+'|'B-'|'AB+'|'O+'|'O-';
    presentAddress:string;
    permanantAddress:string; 
    guardian:TGurdian;
    localGurdian:TLocalGurdian;
    profileImg?:string;
    isActive:'active'|"inactive"
    isDeleted:boolean
}

//custom instance methods
export type StudentMethods={
    isUserExists(id:string):Promise<TStudent|null>
}

export type StudentModel=Model<TStudent,Record<string,never>,StudentMethods>