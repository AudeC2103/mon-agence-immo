import { useState, useEffect } from 'react';
import { getArticles } from '../api/NotesAPI'; // Remplace par ton appel API ou la méthode de récupération des données

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles(); // Remplace par ton appel API réel ou ta méthode de fetch.
        setArticles(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};
