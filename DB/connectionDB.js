import { Console, log } from "console";
import mongoose from "mongoose";



const connectionDB = async () =>{
    return await mongoose.connect("mongodb://localhost:27017/E-commerce")
    .then(()=>{
        console.log('DB connection')
    }).catch((err)=>{
        console.log('database connection error,err');
    })
    
}



export default connectionDB