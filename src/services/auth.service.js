import api from "./api";
/*
    *@param {{email:string,password_hash:string}}data
*/

export const login = async(data)=>{

    try {
    console.log("antes");
    const response = await api.post('/login',data)
    console.log("despues");
     return response.data;
    } catch (error) {
       console.error("Error during login:",error);
       throw error;   
    }
};