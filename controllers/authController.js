const jwt=require("jsonwebtoken")
const User =require("../model/userMode")

exports.login= (req,res)=>{
    const { email, password } = req.body;
    if (!email || !password){
        res.status(402).json({message:"Enter email and password"})
        
    }
    const users = await User.findOne({ email })
    if(!users)
    res.status(402).json({
        message:"Not logged in"
    })

    const username=req.body.user
    const user={name:username}
    const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN)
   
    res.json({accessToken:accessToken})
}
exports.authenticateToken=(req,res,next)=>{
    console.log(req.headers)
    const authHeader=req.headers["authorization"]
    const token=authHeader.split(' ')[1]
    if(token==null) return res.status(401)
    jwt.verify(token ,process.env.ACCESS_TOKEN,(err,user)=>{
        if(err) return res.status(401)
        req.user=user
        next()
    })
}