// ./src/pages/ContactFormPage/ContactFormPage.jsx

import React from 'react';
import ContactForm from './../../components/ContactForm/ContactForm';
import s from './style.module.scss';

const ContactFormPage = () => {
  const handleSubmit = (formData) => {
    // Implémentez la logique pour envoyer les données à un serveur ou une API
    console.log('Form data submitted:', formData);
  };

  return (
    <div className={s.contactPage}>
      <h1>Contactez-nous</h1>
      <p>Vous avez des questions ou besoin d'informations supplémentaires? Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais. Vous souhaitez vous inscrire à notre Newsletters, c'est ici aussi !</p>
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ContactFormPage;
