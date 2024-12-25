import express from 'express'
import {getUser} from '../controllers/general.js'
const router = express.Router()
import mongoose from 'mongoose';

router.get("/user/:id",getUser)
export default router