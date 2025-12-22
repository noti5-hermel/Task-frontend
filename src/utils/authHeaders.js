export const getAuthHeaders =()=>{
    const token = localStorage.getItem('token');
    if(token){
        return {
            Authorization: token ? `Bearer ${token}` : '',
        };
    }
    return {};
};