import React from "react";

const Comment = ({ comment, client, clientRole, clientLogo, clientIndex }) => {
    return (
        <>
            <div className="mainMedium-Container" id="backgroundAboutUsComment">
                <div className="title-platform">
                    <p style={{ fontWeight: '500' }}>Lo que <b>nuestros clientes</b> dicen de nosotros</p>
                </div>
                <div className="commentContainerHome">
                    <div className="commentContent">
                        <p>{comment}</p>
                    </div>
                    <div className="commentByClient">
                        <div className="commentByChild">
                            <img src={clientLogo} alt="" />
                            <div className="clientContent">
                                <p><b>{client}</b></p>
                                <p>{clientRole}</p>
                            </div>
                        </div>
                        <div className="commentByChild">
                            {
                                clientIndex === "1" ?
                                    <>
                                        <div className="circleArrowUnAvailable">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2AEAA5"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
                                        </div>
                                        <div className="circleArrowAvailable">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2AEAA5"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" /></svg>
                                        </div>
                                    </> :
                                    clientIndex === "5" ?
                                        <>
                                            <div className="circleArrowAvailable">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2AEAA5"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
                                            </div>
                                            <div className="circleArrowUnAvailable">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2AEAA5"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" /></svg>
                                            </div>
                                        </> :
                                        <>
                                            <div className="circleArrowAvailable">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2AEAA5"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
                                            </div>
                                            <div className="circleArrowAvailable">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2AEAA5"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" /></svg>
                                            </div>
                                        </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment;