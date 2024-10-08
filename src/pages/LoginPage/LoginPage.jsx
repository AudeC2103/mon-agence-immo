// ./src/pages/LoginPage/LoginPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    switch (name) {
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
      console.log('Login submitted:', formData);
      // Code to handle login submission
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={s.loginContainer}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit} className={s.loginForm}>
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
        <button type="submit" className={s.submitButton}>Se connecter</button>
      </form>
      <p className={s.signupLink}>
        Pas de compte? <Link to="/inscription">Inscrivez-vous ici</Link>.
      </p>
    </div>
  );
};

export default LoginPage;
