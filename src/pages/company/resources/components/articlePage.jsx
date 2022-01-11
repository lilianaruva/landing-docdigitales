import React from "react";
import ArticleBottom from "./articleBottom";
import Article01 from "./articles/01";
import Article02 from "./articles/02";
import Article03 from "./articles/03";
import Article04 from "./articles/04";
import Article05 from "./articles/05";
import '../resources.css'

const ArticlePage = ({ }) => {
    return (
        <>
            <div className="main-ContainerArticle" style={{ marginTop: '134px' }}>
                <Article05 />
            </div>
            <div className="mainMedium-Container" style={{ borderTop: '2px solid #DDE6F699' }}>
                <div className="title-platform">
                    <p style={{ fontWeight: 'bold', margin: '0' }}>Articulos relacionados</p>
                </div>
                <ArticleBottom />
            </div>
        </>
    )
}

export default ArticlePage;