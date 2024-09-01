// ./src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AdvicesListPage from './pages/AdvicesListPage/AdvicesListPage';
import AdviceDetailsPage from './pages/AdviceDetailsPage/AdviceDetailsPage';
import ArticlesListPage from './pages/ArticlesListPage/ArticlesListPage';
import PropertiesListPage from './pages/PropertiesListPage/PropertyListPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage/PropertiesDetailsPage';
import MainLayout from './layouts/MainLayout/MainLayout';
import ContactFormPage from './pages/ContactFormPage/ContactFormPage';
import TeamPage from './pages/TeamPage/TeamPage';
import SuccessPage from './pages/SuccessPage/SuccessPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import CguvPage from './pages/CguvPage/CguvPage';
import LegalNoticePage from './pages/LegalNoticePage/LegalNoticePage';
import FaqPage from './pages/FaqPage/FaqPage'

export function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="biens_a_vendre" element={<PropertiesListPage />} />
                <Route path="biens_a_vendre/:id" element={<PropertyDetailsPage />} /> {/* Route dynamique */}
                <Route path="articles" element={<ArticlesListPage />} />
                <Route path="conseils" element={<AdvicesListPage />} />
                <Route path="conseils/:id" element={<AdviceDetailsPage />} />
                <Route path="l_agence" element={<TeamPage />} />
                <Route path="success" element={<SuccessPage />} />
                <Route path="contact" element={<ContactFormPage />} />
                <Route path="inscription" element={<SignupPage />} />
                <Route path="connexion" element={<LoginPage />} />
                <Route path="cguv" element={<CguvPage />} />
                <Route path="faq" element={<FaqPage />} />
                <Route path="mentions_legales" element={<LegalNoticePage />} />
                <Route path="*" element={<NotFoundPage />} /> {/* Route 404 */}
            </Route>
        </Routes>
    );
}

export default App;
