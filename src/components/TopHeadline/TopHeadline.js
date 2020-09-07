import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-04&sortBy=publishedAt&apiKey=55a34e9bdd6a40fda0776401dfad57a3'
        fetch(url)
        .then(response => response.json())
        .then(data => setArticles(data.articles));
    }, [])
    return (
        <div>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;