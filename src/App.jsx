// ./src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AdvicesListPage from './pages/AdvicesListPage/AdvicesListPage';
import AdviceDetailsPage from './pages/AdviceDetailsPage/AdviceDetailsPage';
import ArticlesListPage from './pages/ArticlesListPage/ArticlesListPage';
import PropertiesListPage from './pages/PropertiesListPage/PropertyListPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage/PropertiesDetailsPage';
import HousePage from './pages/HousePage/HousePage';
import AppartementPage from './pages/AppartementPage/AppartementPage';
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
import MissionPage from './pages/MissionPage/MissionPage'
import ServicesPage from './pages/ServicesPage/ServicesPage';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="inscription" element={<SignupPage />} />
                <Route path="connexion" element={<LoginPage />} />
                <Route path="biens_a_vendre" element={<PropertiesListPage />} />
                <Route path="biens_a_vendre/:id" element={<PropertyDetailsPage />} />
                <Route path="biens_a_vendre/tous" element={<PropertiesListPage />} />
                <Route path="biens_a_vendre/maisons" element={<HousePage />} />
                <Route path="biens_a_vendre/appartements" element={<AppartementPage />} />
                <Route path="articles" element={<ArticlesListPage />} />
                <Route path="conseils" element={<AdvicesListPage />} />
                <Route path="conseils/:id" element={<AdviceDetailsPage />} />
                <Route path="conseils/tous" element={<AdvicesListPage />} />
                <Route path="l_agence" element={<TeamPage />} />
                <Route path="l_agence/tout_savoir" element={<TeamPage />} />
                <Route path="l_agence/mission" element={<MissionPage />} />
                <Route path="l_agence/services" element={<ServicesPage />} />
                <Route path="success" element={<SuccessPage />} />
                <Route path="success/tous" element={<SuccessPage />} />
                <Route path="contact" element={<ContactFormPage />} />
                <Route path="faq" element={<FaqPage />} />
                <Route path="cguv" element={<CguvPage />} />
                <Route path="mentions_legales" element={<LegalNoticePage />} />
                <Route path="*" element={<NotFoundPage />} /> {/* Route 404 */}
            </Route>
        </Routes>
    );
}

export default App;
