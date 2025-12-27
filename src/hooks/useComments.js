import { useState, useCallback } from 'react';
import * as commentService from '../services/commentService';

/**
 * Hook para gestionar los datos de los comentarios, usualmente filtrados por tarea.
 */
export const useComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // A diferencia de otros hooks, no cargamos todos los comentarios por defecto.
  // Los cargaremos bajo demanda (ej: al abrir una tarea).
  const fetchComments = useCallback(async (/* taskId */) => {
    // Aquí se podría filtrar por taskId si la API lo soporta (ej: /task/:taskId/comments)
    // Por ahora, usamos el endpoint general como se definió.
    try {
      setLoading(true);
      setError(null);
      const response = await commentService.getAllComments(); 
      setComments(response.data);
    } catch (err) {
      setError(err);
      console.error('Error al obtener los comentarios:', err);
      setComments([]); // Limpiamos en caso de error
    } finally {
      setLoading(false);
    }
  }, []);

  const addComment = async (commentData) => {
    try {
      const newComment = await commentService.createComment(commentData);
      setComments(prevComments => [...prevComments, newComment.data]);
    } catch (err) {
       console.error('Error al crear el comentario:', err);
       throw err;
    }
  };

  const updateComment = async (id, commentData) => {
    try {
      const updatedComment = await commentService.updateCommentById(id, commentData);
      setComments(prevComments => prevComments.map(c => (c.id === id ? updatedComment.data : c)));
    } catch (err) {
      console.error('Error al actualizar el comentario:', err);
      throw err;
    }
  };

  const deleteComment = async (id) => {
    try {
      await commentService.deleteCommentById(id);
      setComments(prevComments => prevComments.filter(c => c.id !== id));
    } catch (err) {
      console.error('Error al eliminar el comentario:', err);
      throw err;
    }
  };

  return { comments, loading, error, fetchComments, addComment, updateComment, deleteComment };
};
