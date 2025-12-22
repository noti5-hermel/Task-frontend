import {login} from '../services/auth.service';

export const useAuth=()=>{
    const loginUser=async(credentials)=>{
        const data=await login(credentials);

        localStorage.setItem('token',data.token);
        return data;
    };

    return {loginUser};
}