import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const ArticleList = () => {
    const [articles, setArticles] = useState([...useSelector(state => state.article.articles)])

    return (
        <>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="articleTop">
                        <h2 className="titleArticle">Artículos</h2>
                        <div className="col-span-6 sm:col-span-3">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full py-2 px-3 selectArticles"
                            >
                                <option className="OptionArticles">Todos</option>
                                <option>Recientes</option>
                                <option>Mas revelantes</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                        {articles.map((article) => (
                            <Link to={article.href} key={article.id}>
                                <a className="group">
                                    {
                                        article.imageSrc !== "" ?
                                            <img
                                                src={article.imageSrc}
                                                alt={article.imageAlt}
                                                className="ArticleImg object-center object-cover group-hover:opacity-75"
                                            />
                                            :
                                            <div className="ImageArticleNull group-hover:opacity-75"></div>
                                    }
                                    <p className="ArticleName">{article.name}</p>
                                    <p className="ArticleDate">{article.date}</p>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleList;