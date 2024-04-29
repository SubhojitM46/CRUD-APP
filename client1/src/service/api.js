import axios from 'axios'
const URL="https://crud-app-server-pi.vercel.app/"
export const addUser=async (data)=>{
    try{
        return await axios.post(`${URL}/add`,data);
    }
    catch(e){
        console.log("Error while calling add user API",e)
    }
}
export const getUsers=async ()=>{
    try{
        return await axios.get(`${URL}/all`);
    }
    catch(e){
        console.log("Error while calling all user API",e)
    }
}
export const getUser=async (id)=>{
    try{
        return await axios.get(`${URL}/${id}`);
    }
    catch(e){
        console.log("Error while calling get User API",e)
    }
}
export const editUser=async (id,user)=>{
    try{
        return await axios.put(`${URL}/${id}`,user);
    }
    catch(e){
        console.log("Error while calling edit User API",e)
    }
}
export const deleteUser=async (id)=>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }
    catch(e){
        console.log("Error while calling delete User API",e)
    }
}


