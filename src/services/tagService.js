import api from './api';

/**
 * Crea una nueva etiqueta.
 * @param {object} tagData - Los datos de la nueva etiqueta.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const createTag = (tagData) => {
  return api.post('/tag', tagData);
};

/**
 * Obtiene todas las etiquetas.
 * @returns {Promise<object>} La respuesta de la API con la lista de etiquetas.
 */
export const getAllTags = () => {
  return api.get('/tag');
};

/**
 * Obtiene una etiqueta por su ID.
 * @param {string} id - El ID de la etiqueta.
 * @returns {Promise<object>} La respuesta de la API con los datos de la etiqueta.
 */
export const getTagById = (id) => {
  return api.get(`/tag/${id}`);
};

/**
 * Actualiza una etiqueta por su ID.
 * @param {string} id - El ID de la etiqueta a actualizar.
 * @param {object} tagData - Los nuevos datos de la etiqueta.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const updateTagById = (id, tagData) => {
  return api.put(`/tag/${id}`, tagData);
};

/**
 * Elimina una etiqueta por su ID.
 * @param {string} id - El ID de la etiqueta a eliminar.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const deleteTagById = (id) => {
  return api.delete(`/tag/${id}`);
};
