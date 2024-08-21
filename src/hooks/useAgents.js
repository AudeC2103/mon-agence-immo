import { useState, useEffect } from 'react';
import { getAgents } from '../api/NotesAPI';

export const useAgents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await getAgents(); // Utiliser getAgents de NotesAPI
        setAgents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchAgents();
  }, []);

  return { agents, loading, error };
};
