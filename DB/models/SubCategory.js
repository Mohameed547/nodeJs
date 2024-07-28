
import mongoose, { Types } from "mongoose";

const subcategorySchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true,'name is required'],
        trim:true,
        unique:[true,'name is unique'],
        minLength:[2,'min length is 2 character'],
        maxLength:[25,'max length is 25 character']
    },
    slug:{
        type: String,
        required:[true,'slug is required'],
        lowerCase:true
    },
    image:String,
    createdBy:{
        type:Types.ObjectId,
        // required:[true,'createdBy is required'],
        // ref:'User'
    },
    updatedBy:{
        type:Types.ObjectId,
        // ref:'User'
    },
    category:{
        type:Types.ObjectId,
         required:[true,'category is required'],
         ref:'category'
    }

    

},{
    timestamps : true,
    versionKey : false,
})



const SubCategory = mongoose.model('SubCategory',subcategorySchema)

export default SubCategory; 