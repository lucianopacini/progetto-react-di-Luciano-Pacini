import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getHomeStories } from "../services/nytService";

export default function ArticleDetail({ section }) {
    const { articleUrl } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchArticle() {
            try {
                const articles = await getHomeStories(section); // <-- importante!
                const found =
                    articles.find((a) => a.url === decodeURIComponent(articleUrl)) ||
                    articles[0];
                setArticle(found);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchArticle();
    }, [articleUrl, section]);

    if (loading) return <div>Loading...</div>;
    if (!article) return <div>Article not found</div>;

    const imageObj = article.multimedia?.find((m) => m.url) || {};
    const imageUrl = imageObj.url;
    const imageAlt = imageObj.caption || "Article image";

    return (
        <div className="page-transition">
            <div className="article-detail">
                <Link to="/">← Back Home</Link>
                <h1>{article.title}</h1>
                {imageUrl && <img src={imageUrl} alt={imageAlt} />}
                <p>{article.abstract || article.lead_paragraph}</p>
                {article.url && (
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read on NYT
                    </a>
                )}
            </div>
        </div>
    );
}