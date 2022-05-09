const user =require("../model/userMode")
var bodyParser = require('body-parser') 


exports.getAllUsers=async(req,res)=>{
    try{
        const User= await user.find()
        res.status(200).json({
            message:"success",
            User
        })
    }
    catch(err){
        res.status(404).json({
            message:"Something went wrong",
            message:err.message
        })
        
    }

}
exports.getOneUser=async(req,res)=>{
    try{
        const User= await user.findById(req.params.id)
        res.status(200).json({
            status:"success",
            User
        })
    }
    catch(err){
        res.status(404).json({
           status:"falied",
           message:err.message
        })
    }

}
exports.registerUser=async (req,res)=>{
    try{
        console.log("posted")
        const newUser=await user.create(req.body)
        res.status(201).json({
            status:'success',
            data:{
                newUser
            }
        })}
        catch(err){
            console.log("failed")
            res.status(404).json({
                status:'fail',
                message:err.message

            })
        }
    }
    exports.updateUser=async (req,res)=>{
        try{
            const User=await user.findByIdAndUpdate(req.params.id,req.body,{
                new:true,
                runValidators:true
            })
            console.log(req.body)
            res.status(200).json({
                status:'success',
                User
            })
            
            }
            catch(err){
                res.status(404).json({
                    status:"fail",
                    message:err.message
                }
                    )
            }
    }
    exports.deleteUser=async (req,res)=>{
        try{
         await user.findByIdAndDelete(req.params.id)
        
         res.status(204).json({
             status:'success',
             data:null
         })
       
    }
    catch(err){
        res.status(404).json({
            status:"fail",
            message:err.message
        }) 
    }
    }