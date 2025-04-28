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
        type: String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    model:{
        type:String,
    },
    createdAt: {
        type: Date,
        required:true
    },
    rating: {
        type:Number,
        required:true,
        default:0
    }

},{
    timestamps:true
})

const Prompt = mongoose.model("Prompt", promptSchema)

export default Prompt;