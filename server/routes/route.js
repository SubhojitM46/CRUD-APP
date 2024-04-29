const addUser=require("../controller/user-controller")
const User=require('../schema/user-schema.js')
const express=require('express')
const router=express.Router()
router.post("/add",addUser)
router.get("/all",async (request,response)=>{
    try{
       const users=await User.find({});
       response.status(200).json(users)
    }catch(e){
        response.status(404).json({messsage:e.messsage})
    }
})
router.get("/:id",async (request,response)=>{
    try{
       //const user=await User.find({_id:request.params.id});
       const user=await User.findById(request.params.id)
       response.status(200).json(user)
    }catch(e){
        response.status(404).json({messsage:e.messsage})
    }
})
router.put("/:id",async (request,response)=>{
    let user=request.body
    const editUser=new User(user);

    try{
      await User.updateOne({_id:request.params.id},editUser)
      response.status(201).json(editUser)
    //    response.status(200).json(user)
    }catch(e){
        response.status(409).json({messsage:e.messsage})
    }
})
router.delete("/:id",async (request,response)=>{
    try{
      
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
      
    }catch(e){
        response.status(409).json({messsage:e.messsage})
    }
})
module.exports=router;