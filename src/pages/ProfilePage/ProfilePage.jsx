// ./src/pages/ProfilePage/ProfilePage.jsx

import React, { useState } from 'react';
import s from './style.module.scss';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    username: 'NomUtilisateur',
    email: 'exemple@domaine.com',
    bio: 'Petite description de l\'utilisateur',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
    // Code to handle profile update
  };

  return (
    <div className={s.profileContainer}>
      <h2>Mon Profil</h2>
      <form onSubmit={handleSubmit} className={s.profileForm}>
        <div className={s.formGroup}>
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.formGroup}>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.formGroup}>
          <label htmlFor="bio">Bio :</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className={s.submitButton}>Mettre à jour</button>
      </form>
    </div>
  );
};

export default ProfilePage;
