import React from "react";
import ArticleBottom from "./articleBottom";
import Article01 from "./articles/01";
import '../resources.css'

const ArticlePage = ({ }) => {
    return (
        <>
            <div className="main-ContainerArticle" style={{ marginTop: '134px' }}>
                <Article01 />
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