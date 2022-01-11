import React from "react";
import ArticleBottom from "./articleBottom";
import Article01 from "./articles/01";
import Article02 from "./articles/02";
import Article03 from "./articles/03";
import Article04 from "./articles/04";
import Article05 from "./articles/05";
import Article06 from "./articles/06";
import Article07 from "./articles/07";
import Article08 from "./articles/08";
import Article09 from "./articles/09";
import Article10 from "./articles/10";
import SocialMedia from "./articles/socialMedia";
import '../resources.css'

const ArticlePage = ({ }) => {
    return (
        <>
            <div className="mainMedium-Container" style={{ backgroundColor: '#DDE6F699' }}>
            </div>
            <div className="main-ContainerArticle" style={{ marginTop: '134px' }}>
                <SocialMedia />
                <Article10 />
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