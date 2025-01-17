import User from "../models/user.js";
import mongoose from 'mongoose';

export const getUser = async  (req,res)=>{
    try {
     const {id}   = req.params;
     const user  = await User.findById(id);
     res.status(200).json(user)

    } catch (error) {
        res.status(404).json({message: error.message})
        console.log(error);
        
    }
}