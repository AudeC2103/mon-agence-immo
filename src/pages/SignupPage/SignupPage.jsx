// ./src/pages/SignupPage/SignupPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    switch (name) {
      case 'username':
        if (!value) {
          return 'Le nom d\'utilisateur est requis';
        }
        break;
      case 'email':
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value) {
          return 'L\'email est requis';
        } else if (!emailPattern.test(value)) {
          return 'Adresse email non valide';
        }
        break;
      case 'password':
        if (!value) {
          return 'Le mot de passe est requis';
        } else if (value.length < 6) {
          return 'Le mot de passe doit contenir au moins 6 caractères';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          return 'Les mots de passe ne correspondent pas';
        }
        break;
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const error = validate(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) {
        isValid = false;
        newErrors[key] = error;
      }
    });

    if (isValid) {
      console.log('Form submitted:', formData);
      // Code to handle the form submission
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={s.signupContainer}>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit} className={s.signupForm}>
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
          {errors.username && <span className={s.errorText}>{errors.username}</span>}
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
          {errors.email && <span className={s.errorText}>{errors.email}</span>}
        </div>
        <div className={s.formGroup}>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className={s.errorText}>{errors.password}</span>}
        </div>
        <div className={s.formGroup}>
          <label htmlFor="confirmPassword">Confirmer le mot de passe :</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <span className={s.errorText}>{errors.confirmPassword}</span>}
        </div>
        <button type="submit" className={s.submitButton}>S'inscrire</button>
      </form>
      <p className={s.loginLink}>
        Déjà un compte? <Link to="/connexion">Connectez-vous ici</Link>.
      </p>
    </div>
  );
};

export default SignupPage;
