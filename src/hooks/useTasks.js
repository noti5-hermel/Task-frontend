import { useState, useEffect, useCallback } from 'react';
import * as taskService from '../services/taskService';

/**
 * Hook para gestionar los datos de las tareas.
 */
export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await taskService.getAllTasks();
      setTasks(response.data);
    } catch (err) {
      setError(err);
      console.error('Error al obtener las tareas:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = async (taskData) => {
    try {
      const newTask = await taskService.createTask(taskData);
      setTasks(prevTasks => [...prevTasks, newTask.data]);
    } catch (err) {
       console.error('Error al crear la tarea:', err);
       throw err;
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      const updatedTask = await taskService.updateTaskById(id, taskData);
      setTasks(prevTasks => prevTasks.map(task => (task.id === id ? updatedTask.data : task)));
    } catch (err) {
      console.error('Error al actualizar la tarea:', err);
      throw err;
    }
  };

  const deleteTask = async (id) => {
    try {
      await taskService.deleteTaskById(id);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (err) {
      console.error('Error al eliminar la tarea:', err);
      throw err;
    }
  };

  return { tasks, loading, error, addTask, updateTask, deleteTask, refetchTasks: fetchTasks };
};
