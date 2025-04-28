import mongoose from "mongoose";

const promptSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    promptText:{
        type: String,
        required:true,
    },
    category:{
        type: String,
        required:true,
    },
    tags:{
        type: String
    },
    author:{
        type:String,
    },
    model:{
        type:String,
    },
    createdAt: {
        type: Date
    }

})