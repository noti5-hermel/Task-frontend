import api from './api';

/**
 * Crea un nuevo comentario.
 * @param {object} commentData - Los datos del nuevo comentario.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const createComment = (commentData) => {
  return api.post('/coment', commentData);
};

/**
 * Obtiene todos los comentarios (posiblemente asociados a una tarea específica, 
 * la API debería manejar el filtrado si es necesario).
 * @returns {Promise<object>} La respuesta de la API con la lista de comentarios.
 */
export const getAllComments = () => {
  return api.get('/coment');
};

/**
 * Actualiza un comentario por su ID.
 * @param {string} id - El ID del comentario a actualizar.
 * @param {object} commentData - Los nuevos datos del comentario.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const updateCommentById = (id, commentData) => {
  return api.put(`/coment/${id}`, commentData);
};

/**
 * Elimina un comentario por su ID.
 * @param {string} id - El ID del comentario a eliminar.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const deleteCommentById = (id) => {
  return api.delete(`/coment/${id}`);
};
