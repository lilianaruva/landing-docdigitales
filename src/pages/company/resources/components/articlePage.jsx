import React from "react";
import ArticleBottom from "./articleBottom";
import Article01 from "./01";

const ArticlePage = ({ }) => {
    return (
        <>
            <div className="main-ContainerArticle">

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