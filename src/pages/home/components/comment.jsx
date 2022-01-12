import React, { useState } from "react";
import logo1 from '../../../img/home/logos/Imagen1.png';

const Comment = () => {

    const Companies = [
        {
            clientIndex: "1",
            comment: "“En Rentrailer estamos muy agradecidos por el trato tan amable y por el seguimiento personalizado que docDigitales tiene hacia nosotros. El servicio contable fue el plus necesario para que sea el paquete ideal, su equipo de Contadores tienen la disposición real de servicio y aclaraciones hasta en los detalles más mínimos. Contentos con el servicio brindado por esta plataforma y su equipo de trabajo.”",
            client: "Lic. Brenda Sánchez O.",
            clientRole: "Administración Contable",
            clientLogo: logo1
        },
        {
            clientIndex: "2",
            comment: "“La plataforma realmente me ha ayudado a manejar  mi negocio de una forma más cómoda. Me sorprendió mucho la facilidad con la que se usa el sistema, además de que siempre hay una persona lista para asistirte cuando tienes algún problema.”",
            client: "Lic. Brenda Sánchez O.",
            clientRole: "Administración Contable",
            clientLogo: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
        {
            clientIndex: "3",
            comment: "“Sin duda es la mejor forma de administrar mi negocio. No me lleva más de un par de minutos facturar, revisar mis gastos y descargar los reportes semanales de seguimiento. Siempre tienen mi contabilidad a tiempo y ahora ya no tengo que preocuparme por hacer mis declaraciones.”",
            client: "Lic. Brenda Sánchez O.",
            clientRole: "Administración Contable",
            clientLogo: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
        {
            clientIndex: "4",
            comment: "“Llevo ya algún tiempo trabajando con docDigitales y siempre he recibido un trato cercano y una atención personalizada.  La plataforma me gusta mucho, tiene múltiples funciones que me han permitido darle mejor atención a mis clientes y proveedores, lo que ha resultado en que mi negocio creciera bastante en los últimos meses”",
            client: "Lic. Brenda Sánchez O.",
            clientRole: "Administración Contable",
            clientLogo: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
    ]


    const [index, setIndex] = useState(0);

    const IndividualComment = (c) => {
        return <div className="commentContainerHome">
            <div className="commentContent">
                <p>{c.comment}</p>
            </div>
            <div className="commentByClient">
                <div className="commentByChild">
                    <img src={c.clientLogo} alt="" />
                    <div className="clientContent">
                        <p><b>{c.client}</b></p>
                        <p>{c.clientRole}</p>
                    </div>
                </div>
                <div className="commentByChild">
                    {
                        c.clientIndex === "1" ?
                            <>
                                <button className="circleArrowUnAvailable">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2AEAA5"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
                                </button>
                                <button className="circleArrowAvailable" onClick={() => setIndex(index + 1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2AEAA5"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" /></svg>
                                </button>
                            </> :
                            c.clientIndex === "4" ?
                                <>
                                    <button className="circleArrowAvailable" onClick={() => setIndex(index - 1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2AEAA5"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
                                    </button>
                                    <button className="circleArrowUnAvailable">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2AEAA5"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" /></svg>
                                    </button>
                                </> :
                                <>
                                    <button className="circleArrowAvailable" onClick={() => setIndex(index - 1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2AEAA5"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
                                    </button>
                                    <button className="circleArrowAvailable" onClick={() => setIndex(index + 1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2AEAA5"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" /></svg>
                                    </button>
                                </>
                    }
                </div>
            </div>
        </div>
    }


    return (
        <>
            <div className="mainMedium-Container" id="backgroundAboutUsComment">
                <div className="title-platform">
                    <p style={{ fontWeight: '500' }}>Lo que <b>nuestros clientes</b> dicen de nosotros</p>
                </div>
                {
                    IndividualComment(Companies[index])
                }
            </div>
        </>
    )
}

export default Comment;