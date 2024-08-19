// ./src/App;jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ArticleDetailsPage from './pages/ArticleDetailsPage/ArticleDetailsPage';
import ArticlesListPage from './pages/ArticlesListPage/ArticleListPage';
import PropertiesListPage from './pages/PropertiesListPage/PropertyListPage';
import MainLayout from './layouts/MainLayout/MainLayout';
import ContactFormPage from './pages/ContactFormPage/ContactFormPage';
import InformationAndAdvicePage from './pages/InformationAndAdvicePage/InformationAndAdvicePage';
import TeamPage from './pages/TeamPage/TeamPage';
import SucessPage from './pages/SuccessPage/SucessPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
            </Route>
            <Route path="/biens_a_vendre" element={<MainLayout />}>
                <Route index element={<PropertiesListPage />} />
            </Route>
            <Route path="/details_article" element={<MainLayout />}>
                <Route index element={<ArticleDetailsPage />} />
            </Route>
            <Route path="/liste_des_articles" element={<MainLayout />}>
                <Route index element={<ArticlesListPage />} />
            </Route>
            <Route path="/conseils" element={<MainLayout />}>
                <Route index element={<InformationAndAdvicePage />} />
            </Route>
            <Route path="/l_agence" element={<MainLayout />}>
                <Route index element={<TeamPage />} />
            </Route>
            <Route path="/succes" element={<MainLayout />}>
                <Route index element={<SucessPage />} />
            </Route>
            <Route path="/contact" element={<MainLayout />}>
                <Route index element={<ContactFormPage />} />
            </Route>
            <Route path="/404" element={<MainLayout />}>
                <Route index element={<NotFoundPage />} />
            </Route>
            <Route path="/inscription" element={<MainLayout />}>
                <Route index element={<RegisterPage />} />
            </Route>
            <Route path="/connexion" element={<MainLayout />}>
                <Route index element={<LoginPage />} />
            </Route>
        </Routes>
    );
}

export default App;
