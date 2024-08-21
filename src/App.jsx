import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ArticleDetailsPage from './pages/ArticleDetailsPage/ArticleDetailsPage';
import ArticlesListPage from './pages/ArticlesListPage/ArticleListPage';
import PropertiesListPage from './pages/PropertiesListPage/PropertyListPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage/PropertiesDetailsPage';
import MainLayout from './layouts/MainLayout/MainLayout';
import ContactFormPage from './pages/ContactFormPage/ContactFormPage';
import InformationAndAdvicePage from './pages/InformationAndAdvicePage/InformationAndAdvicePage';
import TeamPage from './pages/TeamPage/TeamPage';
import SuccessPage from './pages/SuccessPage/SuccessPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="biens_a_vendre" element={<PropertiesListPage />} />
                <Route path="biens_a_vendre/:id" element={<PropertyDetailsPage />} /> {/* Route dynamique */}
                <Route path="details_article" element={<ArticleDetailsPage />} />
                <Route path="liste_des_articles" element={<ArticlesListPage />} />
                <Route path="conseils" element={<InformationAndAdvicePage />} />
                <Route path="l_agence" element={<TeamPage />} />
                <Route path="succes" element={<SuccessPage />} />
                <Route path="contact" element={<ContactFormPage />} />
                <Route path="inscription" element={<RegisterPage />} />
                <Route path="connexion" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} /> {/* Route 404 */}
            </Route>
        </Routes>
    );
};

export default App;