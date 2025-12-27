import api from './api';

/**
 * Crea una nueva tarea.
 * @param {object} taskData - Los datos de la nueva tarea.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const createTask = (taskData) => {
  return api.post('/task', taskData);
};

/**
 * Obtiene todas las tareas.
 * @returns {Promise<object>} La respuesta de la API con la lista de tareas.
 */
export const getAllTasks = () => {
  return api.get('/task');
};

/**
 * Obtiene una tarea por su ID.
 * @param {string} id - El ID de la tarea.
 * @returns {Promise<object>} La respuesta de la API con los datos de la tarea.
 */
export const getTaskById = (id) => {
  return api.get(`/task/${id}`);
};

/**
 * Actualiza el estado (o cualquier otro dato) de una tarea por su ID.
 * @param {string} id - El ID de la tarea a actualizar.
 * @param {object} taskData - Los nuevos datos de la tarea.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const updateTaskById = (id, taskData) => {
  return api.put(`/task/${id}`, taskData);
};

/**
 * Elimina una tarea por su ID.
 * @param {string} id - El ID de la tarea a eliminar.
 * @returns {Promise<object>} La respuesta de la API.
 */
export const deleteTaskById = (id) => {
  return api.delete(`/task/${id}`);
};
