//./src/layouts/MainLayout/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';
import s from'./style.module.scss';

const MainLayout = () => {
    return (
        <div className={s.mainLayout}>
            <Header />
            <main className={s.mainLayout__content}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
