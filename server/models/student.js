const mongoose =require('mongoose');
const studentSchema= new mongoose.Schema(
    {
        firstName: { type: String, required: [true, 'FirstName is Required!'] },
        lastName: { type: String, required: [true, 'LastName is Required!'] },
        age: { type: Number, required: [true, 'Age is Required!'] },
        dob:{type: Date,required:[true,'DOB required']},
        gender:{type: String,required: [true, 'Gender is Required!']},
        class_name:{type: String, required: [true, 'Class is Required!']},
        fatherName:{type: String, required: [true, 'Father Name is Required!']},
        motherName:{type: String, required: [true, 'Mother Name is Required!']},
        email: { type: String, unique: true, required: [true, 'Email is Required!'] },
        phoneNumber: {
            type: String,
            unique: true,
            required: [true, 'PhoneNumber is required'],
            validate: [
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              'please provide valid number!',
            ],
          },
          tutionFee:{type: Number, required: [true, 'It must not be null, Required!']},
          paidFee:{type: Number},
          dueFee:{type: Number},
          installments:{type: Number},
          dueDate:{type:Date, required:[true,'Due date required']},
    }
)

const studentModel=mongoose.model("Student",studentSchema);
module.exports=studentModel;