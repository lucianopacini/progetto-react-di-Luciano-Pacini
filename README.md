# The Luciano Times 📰

The Luciano Times è una web application sviluppata con React che replica lo stile e l'esperienza di navigazione di un giornale online ispirato al New York Times.

L'applicazione recupera articoli reali tramite la New York Times API e li visualizza in un layout moderno in stile giornale digitale, con articoli in evidenza, sezioni tematiche e una barra di Breaking News dinamica.

## Funzionalità principali

Recupero delle notizie tramite New York Times API

Layout in stile giornale con Hero article e griglia di articoli

Breaking News ticker con titoli scorrevoli

Titoli delle breaking news cliccabili che portano direttamente all'articolo originale sul NYT

Pagina di dettaglio dell'articolo con titolo, immagine e descrizione

Design responsive per desktop, tablet e mobile

Architettura a componenti con React

## Tecnologie utilizzate

React

React Router

React Hooks (useState, useEffect)

New York Times API

CSS Grid e Flexbox

Responsive design con Media Queries

## Struttura del progetto

src/

components/

Navbar

BreakingNews

ArticleCard

pages/

Home

ArticleDetail

services/

nytService (gestione chiamate API)

## Installazione

Clonare il repository:

```bash
git clone https://github.com/lucianopacini/nyt-react-news-app.git
```

Entrare nella cartella del progetto:

cd nyt-react-news-app

Installare le dipendenze:

npm install

Avviare il server di sviluppo:

npm start

L'applicazione sarà disponibile su:

http://localhost:3000

## API

Questo progetto utilizza la New York Times Top Stories API.

Per utilizzare l'applicazione è necessario ottenere una API key dal sito:

https://developer.nytimes.com/

Creare un file .env nella root del progetto con la seguente variabile:

VITE_NYT_API_KEY=la_tua_api_key

## Responsive Design

Il layout è adattabile a diverse dimensioni dello schermo:

Desktop: layout completo in stile giornale

Tablet: griglia ridotta

Mobile: layout a colonna singola

## Possibili miglioramenti futuri

Barra di ricerca degli articoli

Modalità Dark / Light

Migliore gestione degli stati di caricamento

Gestione degli errori API

Aggiunta di nuove sezioni di notizie

## Autore

Luciano Pacini

Questo progetto è stato sviluppato come parte del mio percorso di studio di React e come progetto per il mio portfolio di sviluppo web.

## Licenza

Questo progetto è stato realizzato a scopo didattico.


