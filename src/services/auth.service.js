import api from './api';

/**
 * Autentica a un usuario y guarda el token si es exitoso.
 * @param {object} credentials - Las credenciales del usuario (ej. { email, password_hash }).
 * @returns {Promise<object>} La respuesta de la API.
 */
export const login = async (credentials) => {
  const response = await api.post('/login', credentials);
  if (response.data && response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response;
};

/**
 * Cierra la sesión del usuario eliminando el token.
 */
export const logout = () => {
  localStorage.removeItem('token');
};

/**
 * Verifica si el token actual es válido contra el backend.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const verifyToken = () => {
  return api.post('/login/verify');
};
