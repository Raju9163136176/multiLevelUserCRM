import mongoose from 'mongoose'

const dbConnect = async () =>{
  try { const connect = await mongoose.connect(process.env.MONGO_URL)
    console.log(`db connected : ${connect.connection.host}, ${connect.connection.name}`)}
     catch (error) {
    console.log("DB connection Error has occured",error)
  } 
};
export default dbConnect

// modeule.exports = dbConnect