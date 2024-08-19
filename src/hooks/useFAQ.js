import { useState, useEffect } from 'react';
import { getFAQ } from '../api/NotesAPI';

export const useFAQ = () => {
  const [FAQ, setFAQ] = useState([]); // Remplacez setAgents par setFAQ
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFAQ = async () => { // Remplacez fetchAgents par fetchFAQ
      try {
        const data = await getFAQ(); // Utiliser getFAQ de NotesAPI
        setFAQ(data); // Remplacez setAgents par setFAQ
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchFAQ(); // Assurez-vous que c'est bien fetchFAQ
  }, []);

  return { FAQ, loading, error };
};
