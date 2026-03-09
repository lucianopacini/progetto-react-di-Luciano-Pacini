// src/services/nytService.js
const API_KEY = import.meta.env.VITE_NYT_API_KEY; // così usi la variabile ambiente, più sicuro

export async function getHomeStories(section = "home") { // se non passi section prende home
    const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Errore nella chiamata API");
        const data = await res.json();
        return data.results;
    } catch (err) {
        console.error(err);
        return [];
    }
}