// TextNotesAPI.jsx
import React, { useState, useEffect } from 'react';
import { NotesAPI } from '../../api/NotesAPI';
import style from './style.module.css';

const TextNotes = ({ id }) => {
    const [Property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProperty = async () => {
        setLoading(true);
        setError(null);
        try {
          const data = await NotesAPI.fetchAllProperties();
          setProperty(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProperty();
    }, [id]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!Property) {
      return <div>No data found</div>;
    }
  
    return (
      <div className={style.PropertyContainer}>
        <h1 className="Property-title">{Property.title}</h1>
        <div className="Property-image-container">
          {Property.image && <img src={Property.image} alt={Property.title} style={{ width: '100%', height: 'auto' }} />}
        </div>
        <p className="Property-description">{Property.content}</p>
      </div>
    );
  }; 
  
  export default TextNotes;