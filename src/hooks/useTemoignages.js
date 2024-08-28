import { useState, useEffect } from 'react';
import { getTemoignages } from '../api/NotesAPI';

export const useTemoignages = () => {
  const [temoignages, setTemoignages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTemoignages = async () => {
      try {
        const data = await getTemoignages();
        setTemoignages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTemoignages();
  }, []);

  return { temoignages, loading, error };
};
