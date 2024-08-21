import { useState, useEffect } from 'react';
import { getSlides } from '../api/NotesAPI'; // Assurez-vous que NotesAPI contient cette méthode

export const useSlides = (categorie) => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const allSlides = await getSlides(); // Récupérer toutes les slides
        const filteredSlides = allSlides.filter(slide => 
          Array.isArray(slide.categorie) 
            ? slide.categorie.includes(categorie) 
            : slide.categorie === categorie
        );
        setSlides(filteredSlides);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchSlides();
  }, [categorie]);

  return { slides, loading, error };
};
