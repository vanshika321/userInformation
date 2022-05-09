const mongoose= require("mongoose")
const userSchema= new mongoose.Schema(
    {
        name:{
            type: String,

        },
        email:{
            type :String,
            unique:true
        },
        password:{
            type:String
        },
        gender:{
            type:String
        },
        age:{
            type:Number
        },
        address:{
            type:String
        },
        city:{
            type:String
        },
        state:{
            type:String
        },
        zip:{
            type:String
        },
        
        image:{
            type:String
        }


    }
)
module.exports=mongoose.model("user",userSchema)