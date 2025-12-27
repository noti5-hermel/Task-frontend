import api from './api';

/**
 * Crea un nuevo usuario.
 * @param {object} userData - Los datos del nuevo usuario.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const createUser = (userData) => {
  return api.post('/user', userData);
};

/**
 * Obtiene todos los usuarios.
 * @returns {Promise<object>} La respuesta de la API con la lista de usuarios.
 */
export const getAllUsers = () => {
  return api.get('/user');
};

/**
 * Obtiene un usuario por su ID.
 * @param {string} id - El ID del usuario.
 * @returns {Promise<object>} La respuesta de la API con los datos del usuario.
 */
export const getUserById = (id) => {
  return api.get(`/user/${id}`);
};

/**
 * Actualiza un usuario por su ID.
 * @param {string} id - El ID del usuario a actualizar.
 * @param {object} userData - Los nuevos datos del usuario.
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
