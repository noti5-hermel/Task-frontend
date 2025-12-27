import { useState, useEffect, useCallback } from 'react';
import * as userService from '../services/userService';

/**
 * Hook para gestionar los datos de los usuarios.
 */
export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Usamos useCallback para evitar que la función se recree en cada render,
  // optimizando los efectos que dependen de ella.
  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await userService.getAllUsers();
      setUsers(response.data);
    } catch (err) {
      setError(err);
      console.error('Error al obtener los usuarios:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Efecto para cargar los usuarios la primera vez que el hook es utilizado.
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  /**
   * Añade un nuevo usuario y actualiza el estado local.
   * @param {object} userData - Datos del nuevo usuario.
   */
  const addUser = async (userData) => {
    try {
      const newUser = await userService.createUser(userData);
      setUsers(prevUsers => [...prevUsers, newUser.data]);
    } catch (err) {
       console.error('Error al crear el usuario:', err);
       throw err; // Relanzamos para manejo en el componente
    }
  };

  /**
   * Actualiza un usuario y el estado local.
   * @param {string} id - ID del usuario.
   * @param {object} userData - Datos a actualizar.
   */
  const updateUser = async (id, userData) => {
    try {
      const updatedUser = await userService.updateUserById(id, userData);
      setUsers(prevUsers => prevUsers.map(user => (user.id === id ? updatedUser.data : user)));
    } catch (err) {
      console.error('Error al actualizar el usuario:', err);
      throw err;
    }
  };

  /**
   * Elimina un usuario y lo quita del estado local.
   * @param {string} id - ID del usuario a eliminar.
   */
  const deleteUser = async (id) => {
    try {
      await userService.deleteUserById(id);
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    } catch (err) {
      console.error('Error al eliminar el usuario:', err);
      throw err;
    }
  };

  // Exponemos el estado y las funciones para que los componentes puedan usarlos.
  return { users, loading, error, addUser, updateUser, deleteUser, refetchUsers: fetchUsers };
};
