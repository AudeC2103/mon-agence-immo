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
  
    console.log('Slides récupérées:', data.Slides);

    return data.Slides;
};

export const getMissions = async () => {
    const data = await fetchData();
    if (!data || !data.Missions) {
        throw new Error("Le fichier JSON ne contient pas de clé 'Missions'.");
    }
    return data.Missions;
};

export const getTemoignages = async () => {
    const data = await fetchData();
    if (!data || !data.Temoignages) {
        throw new Error("Le fichier JSON ne contient pas de clé 'Temoignages'.");
    }
    return data.Temoignages;
};

export const getAdvices = async () => {
    const data = await fetchData();
    if (!data || !data.Advices) {
        throw new Error("Le fichier JSON ne contient pas de clé 'Advices'.");
    }
    return data.Advices;
};

