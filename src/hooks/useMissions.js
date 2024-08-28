import { useState, useEffect } from 'react';
import { getMissions } from '../api/NotesAPI';

export const useMissions = () => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const data = await getMissions();
        setMissions(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  return { missions, loading, error };
};
