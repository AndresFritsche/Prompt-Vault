import mongoose from "mongoose";



const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL as string)
        console.log("MongoDB CONNECTED")
    } catch (error) {
        console.error('Error connection')
        process.exit(1)
    }
}
export default connectDB;