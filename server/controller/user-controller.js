 const express = require('express');
const User=require('../schema/user-schema.js')
 const addUser=async (request,response)=>{
    const user=request.body;
    const newUser= new User(user);
    try{
        await newUser.save()
        response.status(201).json(newUser)
        console.log("data saved")
       
    }catch(e){
        response.status(409).json({messsage:e.messsage})
    }
}


module.exports=addUser;


