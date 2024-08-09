import { BASE_URL } from "../config";

// Fonction asynchrone pour récupérer toutes les propriétés
export const getProperties = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Erreur de récupération des données de Properties');
        }
        const data = await response.json();
        console.log('Data:', data);

        // Vérification de la présence de la clé 'Properties'
        if (!data.Properties) {
            throw new Error("Le fichier JSON ne contient pas de clé 'Properties'.");
        }

        return data.Properties;
    } catch (error) {
        console.error('Erreur lors de la récupération des propriétés:', error.message);
        throw error;
    }
};

// Fonction asynchrone pour récupérer tous les agents
export const getAgents = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Erreur de récupération des données des Agents');
        }
        const data = await response.json();
        console.log('Data:', data);

        // Vérification de la présence de la clé 'Agents'
        if (!data.Agents) {
            throw new Error("Le fichier JSON ne contient pas de clé 'Agents'.");
        }

        return data.Agents;
    } catch (error) {
        console.error('Erreur lors de la récupération des agents:', error.message);
        throw error;
    }
};

// Fonction asynchrone pour récupérer tous les articles
export const getArticles = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Erreur de récupération des données des Articles');
        }
        const data = await response.json();
        console.log('Data:', data);

        // Vérification de la présence de la clé 'Articles'
        if (!data.Articles) {
            throw new Error("Le fichier JSON ne contient pas de clé 'Articles'.");
        }

        return data.Articles;
    } catch (error) {
        console.error('Erreur lors de la récupération des articles:', error.message);
        throw error;
    }
};

// Fonction asynchrone pour récupérer la FAQ
export const getFAQ = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Erreur de récupération des données de la FAQ');
        }
        const data = await response.json();
        console.log('Data:', data);

        // Vérification de la présence de la clé 'FAQ'
        if (!data.FAQ) {
            throw new Error("Le fichier JSON ne contient pas de clé 'FAQ'.");
        }

        return data.FAQ;
    } catch (error) {
        console.error('Erreur lors de la récupération de la FAQ:', error.message);
        throw error;
    }
};