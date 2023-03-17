import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    presance:{type:String},
    date:{type:Date,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    code:{type:String,required:true},
    subjectName:{type:String,required:true},
    subjectDate:{type:String,required:true},
})

export default mongoose.model('Presance' , userSchema)
