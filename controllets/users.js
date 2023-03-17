import jwt from "jsonwebtoken"
import User from '../models/user.js'
export const createAccount = async(req, res) => {
    const {userName,firstName, lastName, code} = req.body; // cne instead of code 

    try{
        const existingUser = await User.findOne({code});
        if(existingUser) return res.status(400).json({message:"User already exists"});
        const result = await User.create({userName,firstName, lastName, code});
        res.status(200).json({result});

    }catch(error){
        console.log(error)
    }
}

export const getUsers = async(req,res) => {
    try{
        const users = await User.find();
        res.status(200).json({users})
    }catch(error){
        console.log(error)
    }
}

//delete user 
export const deleteUser = async(req,res) => {
    const {_id} = req.params;
    try{
        const user = await User.findByIdAndDelete(_id);
        res.status(200).json({user})
    }catch(error){
        console.log(error)
    }
}

//update user
export const updateUser = async(req,res) => {
    const {_id,code, userName, firstName, lastName} = req.body;
    //create object id


    try{
        const user = await User.findByIdAndUpdate(_id, {code, userName, firstName, lastName},{new:true});
        res.status(200).json({user})
    }catch(error){
        console.log(error)
    }
}
