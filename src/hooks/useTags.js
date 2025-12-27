import { useState, useEffect, useCallback } from 'react';
import * as tagService from '../services/tagService';

/**
 * Hook para gestionar los datos de las etiquetas.
 */
export const useTags = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTags = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await tagService.getAllTags();
      setTags(response.data);
    } catch (err) {
      setError(err);
      console.error('Error al obtener las etiquetas:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  const addTag = async (tagData) => {
    try {
      const newTag = await tagService.createTag(tagData);
      setTags(prevTags => [...prevTags, newTag.data]);
    } catch (err) {
       console.error('Error al crear la etiqueta:', err);
       throw err;
    }
  };

  const updateTag = async (id, tagData) => {
    try {
      const updatedTag = await tagService.updateTagById(id, tagData);
      setTags(prevTags => prevTags.map(tag => (tag.id === id ? updatedTag.data : tag)));
    } catch (err) {
      console.error('Error al actualizar la etiqueta:', err);
      throw err;
    }
  };

  const deleteTag = async (id) => {
    try {
      await tagService.deleteTagById(id);
      setTags(prevTags => prevTags.filter(tag => tag.id !== id));
    } catch (err) {
      console.error('Error al eliminar la etiqueta:', err);
      throw err;
    }
  };

  return { tags, loading, error, addTag, updateTag, deleteTag, refetchTags: fetchTags };
};
