// ./src/components/ContactForm/ContactForm.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';

const ContactForm = ({ onSubmit, initialValues = {} }) => {
  const [formData, setFormData] = useState({
    name: initialValues.name || '',
    email: initialValues.email || '',
    subject: initialValues.subject || '',
    message: initialValues.message || ''
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
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <div className={s.formGroup}>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
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
        <label htmlFor="subject">Sujet :</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className={s.formGroup}>
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
      </div>
      <button type="submit" className={s.submitButton}>
        Envoyer
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    subject: PropTypes.string,
    message: PropTypes.string,
  }),
};

export default ContactForm;
