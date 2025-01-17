import express from 'express'
import bodyParser from 'body-parser' 
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import dbConnect from './config/dbConnect.js'
import clientRoutes from './routes/client.js'
import managementRoutes from './routes/management.js'
import generalRoutes from './routes/general.js'
import salesRoutes from './routes/sales.js'
import authRouter from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
// import mongoose from 'mongoose';

import User from './models/user.js'
// import { dataUser } from './data/index.js'
/* configuration */
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('common'))
app.use(cors())

/* client */
app.use("/client",clientRoutes)
app.use("/management",managementRoutes)
app.use("/general",generalRoutes)
app.use("/sales",salesRoutes)
app.use("/api/auth",authRouter)
app.use("/api/users",userRoutes)
app.get('/',(req,res)=>{
    res.send("test me")
})

// connect to db and start the server
/* mongoose */
const PORT = process.env.PORT || 9000
dbConnect().then(()=>{
    app.listen(PORT, ()=> console.log(`server started ${PORT}`) )
    /* Onlyy add data one time  */
   // User.insertMany(dataUser)
})
.catch((error) => {
    console.log("DB connection Error has occured",error)

} )

