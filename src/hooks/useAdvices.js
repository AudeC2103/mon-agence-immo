//./src/hooks/useAdvices.js
import { useState, useEffect } from 'react';
import { getAdvices } from '../api/NotesAPI';

export const useAdvices = () => {
  const [advices, setAdvices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvices = async () => {
      try {
        const data = await getAdvices();
        setAdvices(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvices();
  }, []);

  return { advices, loading, error };
};
