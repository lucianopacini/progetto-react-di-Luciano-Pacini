import React, { useEffect, useState } from "react";
import { getHomeStories } from "../services/nytService";
import "./BreakingNews.css";

export default function BreakingNews({ section = "home" }) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            try {
                const data = await getHomeStories(section);
                const filtered = data
                    .filter(article => article.title && article.url)
                    .slice(0, 10)
                    .map(article => ({ title: article.title, url: article.url }));
                setNews(filtered);
            } catch (err) {
                console.error(err);
            }
        }

        fetchNews();
    }, [section]);

    return (
        <div className="breaking-news-container">
            <div className="breaking-news-label">BREAKING NEWS:</div>
            <div className="breaking-news-ticker">
                <div className="breaking-news-move">
                    {news.length > 0
                        ? [...news, ...news].map((item, index) => (
                            <span key={index} className="breaking-news-item">
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.title}
                                </a>
                            </span>
                        ))
                        : <span>Nessuna notizia al momento</span>}
                </div>
            </div>
        </div>
    );
}