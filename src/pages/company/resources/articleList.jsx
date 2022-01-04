import React from "react";

const ArticleList = () => {
    const articles = [
        {
            id: 1,
            name: '¿Cómo generar mi constancia de situación fiscal en el SAT?',
            href: '/articulo-01',
            date: 'Septiembre 14, 2021',
            imageSrc: '',
            imageAlt: '¿Cómo generar mi constancia de situación fiscal en el SAT?',
        },
        {
            id: 2,
            name: 'Conoce cuándo es necesario el complemento Carta Porte en tus facturas.',
            href: '/articulo-02',
            date: 'Septiembre 14, 2021',
            imageSrc: '',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'Renueva tu e.Firma sin acudir al SAT',
            href: '/articulo-03',
            date: 'Septiembre 14, 2021',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'Obtén tu firma electrónica (FIEL) por primera vez',
            href: '/articulo-04',
            date: 'Septiembre 14, 2021',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 5,
            name: '¿Cómo realizo el cambio de domicilio fiscal en el SAT?',
            href: '/articulo-05',
            date: 'Septiembre 14, 2021',
            imageSrc: '',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 6,
            name: 'Personas físicas podrán presentar declaración anual hasta mayo',
            href: '/articulo-06',
            date: 'Septiembre 14, 2021',
            imageSrc: '',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 7,
            name: '¿Cómo presento mi aviso de actividades económicas en el SAT?',
            href: '/articulo-07',
            date: 'Septiembre 14, 2021',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 8,
            name: 'Manual del Complemento de Carta Porte',
            href: '/articulo-08',
            date: 'Septiembre 14, 2021',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        // More articles...
    ]

    return (
        <>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="titleArticle">Artículos</h2>
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                        {articles.map((article) => (
                            <a key={article.id} href={article.href} className="group">
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
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleList;