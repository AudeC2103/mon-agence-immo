//./pages/ContactOverView/ContactOverView.jsx
import React from 'react';
import { Link } from "react-router-dom";
import s from './style.module.scss';

const ContactOverView = () => {
  return (
    <div className={s.container}>
      <div className={s.container__contactOverView}>
        <h2>Contactez-nous</h2>
        <p>Vous avez des questions ou souhaitez visiter une propriété ? Contactez-nous dès aujourd'hui.</p>
        <div className={s.btn}>
          <Link to="/contact" className={s.contactBtn}>Contactez-nous</Link>
        </div>
      </div>
    </div>
  );
};

export default ContactOverView;