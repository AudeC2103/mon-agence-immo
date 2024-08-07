import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
/*import ArticleDetailsPage from './pages/ArticleDetailsPage/ArticleDetailsPage';
import ArticleListPage from './pages/ArticleListPage/ArticleListPage';
import ContactFormPage from './pages/ContactFormPage/ContactFormPage';
import MissionPage from './pages/MissionPage/MissionPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage/PropertyDetailsPage';
import PropertyListPage from './pages/PropertyListPage/PropertyListPage';
import ServiceListPage from './pages/ServiceListPage/ServiceListPage';
import SuccessPage from './pages/SuccessPage/SuccessPage'; // Correction de l'import*/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

/*<Route path="/ArticleDetailsPage" element={<ArticleDetailsPage />} />
          <Route path="/ArticleListPage" element={<ArticleListPage />} />
          <Route path="/ContactFormPage" element={<ContactFormPage />} />
          <Route path="/MissionPage" element={<MissionPage />} />
          <Route path="/NotFoundPage" element={<NotFoundPage />} />
          <Route path="/PropertyDetailsPage/:id" element={<PropertyDetailsPage />} />
          <Route path="/PropertyListPage" element={<PropertyListPage />} />
          <Route path="/ServiceListPage" element={<ServiceListPage />} />
          <Route path="/SuccessPage" element={<SuccessPage />} />
          */