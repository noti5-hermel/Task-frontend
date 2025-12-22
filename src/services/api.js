import axios from 'axios';
//con vite utlizar import.meta.env para extraer variables de entorno
const api = axios.create({
    baseURL: import.meta.env.API_URL || 'http://localhost:3030',
    headers: {  
        'Content-Type': 'application/json',
    },
})

export default api;