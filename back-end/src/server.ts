import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from '../config/db'
dotenv.config()

connectDB()
const app = express()

const PORT = process.env.PORT || 5000;

app.get('/', (req:Request, res:Response) =>{
    res.send("Hello from server")
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})




app.use(cors())