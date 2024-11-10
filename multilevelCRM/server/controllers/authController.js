
const User = require("../models/user")
const bcrypt = require("bycryptjs")
const jwt = require("jsonwebtoken")
const register = async(res,req)=>{
      const  {username,password,role} = req.body
      const hasHashedPassword = await bcrypt.hash(password,10)
      const newUSer = new User({username, password:hasHashedPassword, role })
      newUSer.save()
      res.status(201).json()
}

const login =async(res,req)=>{

}

module.export = {
    register,
    login
}