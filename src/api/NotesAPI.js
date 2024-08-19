import { BASE_URL } from "../config";

// Fonction pour récupérer tout le fichier db.json
const fetchData = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Erreur de récupération des données');
        }
        const data = await response.json();
        console.log('Données récupérées:', data);

        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error.message);
        throw error;
    }
};

// Fonctions spécifiques pour chaque type de données
export const getProperties = async () => {
    const data = await fetchData();
    if (!data || !data.Properties) {
        throw new Error("Le fichier JSON ne contient pas de clé 'Properties'.");
    }
    return data.Properties;
};

export const getAgents = async () => {
    const data = await fetchData();
    if (!data || !data.Agents) {
        throw new Error("Le fichier JSON ne contient pas de clé 'Agents'.");
    }
    return data.Agents;
};

export const getArticles = async () => {
    const data = await fetchData();
    if (!data || !data.Articles) {
        throw new Error("Le fichier JSON ne contient pas de clé 'Articles'.");
    }
    return data.Articles;
};

export const getFAQ = async () => {
    const data = await fetchData();
    if (!data || !data.FAQ) {
        throw new Error("Le fichier JSON ne contient pas de clé 'FAQ'.");
    }
    return data.FAQ;
};

export const getSlides = async () => {
    const data = await fetchData();
    if (!data || !data.Slides) {
        throw new Error("Le fichier JSON ne contient pas de clé 'Slides'.");
    }
  
    return data.Slides;
};
