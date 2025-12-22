import api from "./api";
/*
    *@param {{email:string,password_hash:string}}data
*/

export const login = async(data)=>{
    const response = await api.post('/login',data)
     return response.data;
};