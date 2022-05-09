const userRoute=require("./routes/userRoute")
const express =require("express")
const app =express()
const dotenv=require("dotenv")
const bodyParser=require("body-parser")
const mongoose =require ("mongoose");
app.use(express.json())
app. use(bodyParser. text())
//body-parser
dotenv.config({path:"./process.env"})
const DB=process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
)

mongoose.connect(DB,
    {
   
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true
    })
    .then(console.log("DB connection successfull"))
    .catch(err => console.log("the err is", err ));
console.log("err")
app.listen(3000,()=>{
    console.log(`App running on port 3000...`);
})
// app.use('/', userRoute);
app.use("/api/v1/users",userRoute) 
