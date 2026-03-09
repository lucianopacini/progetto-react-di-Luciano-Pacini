import "./HeroArticle.css";

import { Link } from "react-router-dom";

export default function HeroArticle({ article }) {

    const imageObj = article.multimedia?.find(m => m.url) || {};
    const imageUrl = imageObj.url;

    return (
        <Link to={`/article/0`}>
            <div className="hero-article">

                {imageUrl && (
                    <img
                        className="hero-image"
                        src={imageUrl}
                        alt={article.title}
                    />
                )}

                <div className="hero-content">
                    <h1>{article.title}</h1>
                    <p>{article.abstract}</p>
                </div>

            </div>
        </Link>
    );
}

