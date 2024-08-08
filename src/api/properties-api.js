// Définition de l'URL de base pour l'API.
// BASE_URL est l'URL de base pour accéder à votre serveur JSON local qui tourne sur le port 5556.
const BASE_URL = "http://localhost:5556";

// Définition d'une classe PropertiesAPI qui contient des méthodes statiques pour interagir avec l'API des propriétés.
export class PropertiesAPI {
    
    // Méthode statique pour récupérer toutes les propriétés.
    // Cette méthode utilise fetch pour faire une requête GET à l'endpoint "/Properties" de l'API.
    static async fetchAllProperties() {
        // Utilisation de la méthode fetch pour envoyer une requête GET à l'endpoint "/Properties".
        return fetch(`${BASE_URL}/Properties`)
            .then(response => {
                // Vérification si la réponse n'est pas correcte (code HTTP différent de 200-299).
                if (!response.ok) {
                    // Si la réponse n'est pas correcte, lancer une erreur.
                    throw new Error("Network response was not ok");
                }
                // Si la réponse est correcte, la méthode retourne le contenu JSON de la réponse.
                return response.json();
            })
            .catch(error => {
                // Gestion des erreurs. Affiche l'erreur dans la console.
                console.error("There was a problem with the fetch operation:", error);
            });
    }

    static async fetchPropertyById(id) {
        return fetch(`${BASE_URL}/Properties/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }

    static async fetchAllAgents() {
        return fetch(`${BASE_URL}/Agents`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }

    static async fetchAgentById(id) {
        return fetch(`${BASE_URL}/Agents/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }

    static async fetchAllArticles() {
        return fetch(`${BASE_URL}/Articles`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }

    static async fetchArticleById(id) {
        return fetch(`${BASE_URL}/Articles/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }

    static async fetchAllFAQ() {
        return fetch(`${BASE_URL}/FAQ`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }

    static async fetchFAQById(id) {
        return fetch(`${BASE_URL}/FAQ/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }
}

// Exemple d'utilisation :

// Fetch all properties
PropertiesAPI.fetchAllProperties().then((data) => {
  console.log("All properties:", data);
});

// Fetch a property by ID
PropertiesAPI.fetchPropertyById(1).then((data) => {
  console.log("Property with ID 1:", data);
});
