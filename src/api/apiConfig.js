const apiConfig = {
    // URL de base de l'API TMDB
    baseURL: "https://api.themoviedb.org/3/",
    apiKey: import.meta.env.VITE_TMDB_API_KEY,  
    
    // Construit le chemin d'API avec le code de langue
    getApiPath: (path, languageCode = 'en-US') => {
        const formattedPath = path.startsWith('/') ? path.substring(1) : path;
        // Retourne le chemin formaté SANS la clé API (elle doit être ajoutée par tmdbApi.js)
        return `/${formattedPath}?language=${languageCode}`; 
    },

    // Construit l'URL complète pour l'image de taille originale
    originalImage: (imagePath) => `https://image.tmdb.org/t/p/original/${imagePath}`,
    // Construit l'URL complète pour l'image de taille w500
    w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
};

export default apiConfig;