import { FormControl, FormGroup,InputLabel,Input, Typography,styled,Button } from '@mui/material'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {addUser} from '../service/api'
const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& >div{
  margin-top:20px
}`
const defaultValue={
  name:" ",
  username:" ",
  email:" ",
  phone:" "
}

export default function AddUser() {
  const[user,setUser]=useState(defaultValue);
  const navigate=useNavigate()
  const onValueChange=(e)=>{
   
    setUser({...user,[e.target.name]:e.target.value})//e.target.name and value both are variable so  it creates error to solve it use [e.target.name]
   
  }
  const addUserDetails=async ()=>{
    await addUser(user);
    navigate("/all")
  }
  return (
    <Container>
        <Typography variant="h4">AddUser</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=> onValueChange(e)} name="name"/>
        </FormControl>
        <FormControl>
          <InputLabel >UserName</InputLabel>
          <Input  onChange={(e)=> onValueChange(e)} name="username"/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input  onChange={(e)=> onValueChange(e)} name="email"/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input  onChange={(e)=> onValueChange(e)} name="phone"/>
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={()=>addUserDetails()}>ADD USER</Button>
        </FormControl>
    </Container>
  )
}
