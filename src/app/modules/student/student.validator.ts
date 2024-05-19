import Joi, { CustomHelpers, ObjectSchema, custom } from "joi";

// Define the UserName schema
const userNameValidatorSchema: ObjectSchema = Joi.object({
    firstName: Joi.string()
        .trim()
        .max(20)
        .required()
        .custom((value: string, helpers: CustomHelpers) => {
            const firstNameStr: string = value.charAt(0).toUpperCase() + value.slice(1);
            if (firstNameStr !== value) {
                return helpers.message({custom:`"${value}" is not in capitalize format`});
            }
            return value;
        }, 'capitalize validation'),
    middleName: Joi.string().allow(''), // Optional field
    lastName: Joi.string()
        .required()
        .pattern(/^[A-Za-z]+$/, 'alphabetic characters')
        .messages({
            'string.pattern.name': '"{#value}" is not valid. Remove external characters'
        })
});

// Define the Guardian schema
const guardianValidatorSchema: ObjectSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    motherName: Joi.string().required(),
    motherContactNo: Joi.string().required(),
    motherOccupation: Joi.string().required()
});

// Define the LocalGuardian schema
const localGuardianValidatorSchema: ObjectSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    address: Joi.string().required(),
    contactNo: Joi.string().required()
});

// Define the Student schema
const studentValidatorSchema: ObjectSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameValidatorSchema.required(),
    password:Joi.string().max(20).required(),
    gender: Joi.string()
        .valid('male', 'female')
        .required()
        .messages({
            'any.only': 'Gender must be one of these MALE or FEMALE'
        }),
    dateOfBirth: Joi.string().optional(),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Not a valid email'
        }),
    contactNo: Joi.string().required(),
    emergencyContactNo: Joi.string().required(),
    bloodGroup: Joi.string()
        .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'O+', 'O-')
        .optional(),
    presentAddress: Joi.string().required(),
    permanantAddress: Joi.string().required(),
    guardian: guardianValidatorSchema.required(),
    localGuardian: localGuardianValidatorSchema.optional(),
    profileImg: Joi.string().optional(),
    isActive: Joi.string()
        .valid('active', 'inactive')
        .default('active')
});

export default studentValidatorSchema