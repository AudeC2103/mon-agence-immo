//./pages/NotFoundPage/NotFoundPage.jsx
import React from 'react';
import s from './style.module.scss';

const NotFoundPage = () => {
  return (
    <div className={s.page}>
        <div className={s.page__NotFound}>
        404 - Page not found
        </div>
    </div>
  );
};

export default NotFoundPage;