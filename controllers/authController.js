const jwt=require("jsonwebtoken")


exports.login= (req,res)=>{
    //authenticat
    const username=req.body.username
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