/*import axios from 'axios';
//con vite utlizar import.meta.env para extraer variables de entorno


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3030',
    headers: {  
        'Content-Type': 'application/json',
    },

    
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;*/

import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3030',
    headers: {  
        'Content-Type': 'application/json',
    },
});

// --- LOG DE PETICIONES (REQUEST) ---
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Log para ver a dónde va la petición y qué lleva
        console.log(`🚀 Enviando ${config.method?.toUpperCase()} a: ${config.baseURL}${config.url}`);
        console.log('Headers actuales:', config.headers);
        
        return config;
    },
    (error) => {
        console.error('❌ Error en el envío de la petición:', error);
        return Promise.reject(error);
    }
);

// --- LOG DE RESPUESTAS (RESPONSE) ---
api.interceptors.response.use(
    (response) => {
        console.log('✅ Respuesta del servidor:', response.data);
        return response;
    },
    (error) => {
        // Este log es CLAVE para tu error de red
        console.group('❌ Error en la respuesta');
        console.log('Mensaje:', error.message);
        console.log('Código:', error.code);
        console.log('Configuración de la petición:', error.config);
        
        if (error.response) {
            // El servidor respondió con un error (400, 401, 500, etc.)
            console.log('Data del error:', error.response.data);
            console.log('Status:', error.response.status);
        } else if (error.request) {
            // La petición se hizo pero no hubo respuesta (CORS o Servidor apagado)
            console.log('No se recibió respuesta del servidor. Revisa CORS o si el puerto 3030 está abierto.');
        }
        console.groupEnd();
        
        return Promise.reject(error);
    }
);

export default api;