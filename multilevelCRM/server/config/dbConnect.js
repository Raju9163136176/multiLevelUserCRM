import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('common'))
app.use(cors())

const dbConnect = async () =>{
    console.log(process.env.MONGO_URL); // Ensure it prints the correct URI

  try { const connect = await mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
    console.log(`db connected : ${connect.connection.host}, ${connect.connection.name}`)}
  catch (error) {
    console.log("DB connection Error has occured",error)

  } 
};
export default dbConnect

// modeule.exports = dbConnect