import api from './api';

/**
 * Obtiene todos los usuarios.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const getAllUsers = () => {
  return api.get('/user');
};

/**
 * Obtiene un usuario por su ID.
 * @param {string} id - El ID del usuario.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const getUserById = (id) => {
  return api.get(`/user/${id}`);
};

/**
 * Crea un nuevo usuario.
 * @param {object} userData - Los datos del usuario a crear.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const createUser = (userData) => {
  return api.post('/user', userData);
};

/**
 * Actualiza un usuario por su ID.
 * @param {string} id - El ID del usuario a actualizar.
 * @param {object} userData - Los datos a actualizar.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const updateUserById = (id, userData) => {
  return api.put(`/user/${id}`, userData);
};

/**
 * Elimina un usuario por su ID.
 * @param {string} id - El ID del usuario a eliminar.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const deleteUserById = (id) => {
  return api.delete(`/user/${id}`);
};
