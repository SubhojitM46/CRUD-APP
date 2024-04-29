import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material'
import { NavLink } from 'react-router-dom';
import crud from '../images/crud.png'
const Header = styled(AppBar)`
    background: #111111;
`;
   //p tag is not a component so it is used in '' 
const Tabs = styled(NavLink)` 
    color: inherit;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
   
`;

export default function NavBar() {
  return (
   
        <Header position="static">
            <Toolbar>
               <Tabs to="/"><img src={crud}  alt="CRUD" height="40px" width="70px"></img></Tabs>
               <Tabs to="/all">All Users</Tabs>
               <Tabs to="/add">Add Users</Tabs>
            </Toolbar>
        </Header>
  
  )
}
