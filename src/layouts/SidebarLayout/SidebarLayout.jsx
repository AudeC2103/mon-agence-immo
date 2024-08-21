import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import s from './style.module.scss';

const SidebarLayout = () => {
    return (
        <div className={s.sidebarLayout}>
            <Header />
            <div className={s.layoutContent}>
                <aside className={s.sidebar}>
                    {/* Contenu de la barre latérale */}
                </aside>
                <main className={s.mainContent}>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default SidebarLayout;
