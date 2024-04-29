const express =require('express')
const Connection =require("./database/db.js")
const dotenv=require('dotenv')
const routes =require('./routes/route.js')
const cors=require("cors")
const bodyParser=require('body-parser')
const app=express()
//express ka server banta hai
dotenv.config()

app.use(bodyParser.json({extended:true}))
app.use(cors(
  origin:["https://crud-app-sigma-pink.vercel.app/"],
  methods:["POST","GET"],
  credentials:true
))
app.use("/",routes)

const PORT=8000
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);
app.listen(PORT,()=>
console.log(`Server is running successfully on PORT ${PORT}`))
