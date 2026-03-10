import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonCard from "../components/SkeletonCard";
import { getHomeStories } from "../services/nytService";
import HeroArticle from "../components/HeroArticle";

export default function Home({ section }) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const data = await getHomeStories(section);
                const filtered = data.filter(
                    (article) => article.multimedia && article.multimedia.length > 0
                );
                setArticles(filtered.slice(0, 24));
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchArticles();
    }, [section]);

    if (loading) {
        const gridClass = section === "home" ? "articles-grid" : "articles-grid-alt";
        return (
            <div className={gridClass}>
                {Array.from({ length: 12 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </div>
        );
    }

    if (error) return <p>Error: {error}</p>;

    const gridClass = section === "home" ? "articles-grid" : "articles-grid-alt";
    const heroArticle = section === "home" ? articles[0] : null;
    const sideArticles = section === "home" ? articles.slice(1, 4) : [];
    const gridArticles = section === "home" ? articles.slice(4) : articles;

    return (

        <div className="page-transition">
            <h2 className="section-title">{(section || "HOME").toUpperCase()}</h2>

            {section === "home" && (
                <div className="hero-layout">
                    <HeroArticle article={heroArticle} />

                    <div className="hero-side">
                        {sideArticles.map((item, index) => {
                            const imageObj = item.multimedia?.find((m) => m.url) || {};
                            const imageUrl = imageObj.url;

                            return (
                                <Link
                                    key={index}
                                    to={`/article/${encodeURIComponent(item.url)}`}
                                >
                                    <div className="side-card">
                                        {imageUrl && <img src={imageUrl} alt={item.title} />}
                                        <h4>{item.title}</h4>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}

            <div className={gridClass}>
                {gridArticles.map((item, index) => {
                    const imageObj = item.multimedia?.find((m) => m.url) || {};
                    const imageUrl = imageObj.url;
                    const imageAlt = imageObj.caption || "Article image";

                    return (
                        <Link key={index} to={`/article/${encodeURIComponent(item.url)}`}>
                            <div className="card" style={{ animationDelay: `${index * 0.08}s` }}>
                                {imageUrl && <img src={imageUrl} alt={imageAlt} />}
                                <h3>{item.title}</h3>
                                <p>{item.abstract}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}