import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./home.css"

import pushpa2Poster from "./images/pushpa2_mve_poster.jpg";
import Anaadaposter from "./images/Anaada_mve_poster.jpg";
import BachalaPoster from "./images/Bachala_mali_mve_poster.jpg";
import rotikapadaromancePoster from "./images/rotikapadaromance_mve_poster.jpg"
import nationalfilmawards from "./images/national-film-awards.webp";
import PushpaAward from "./images/pushpa_sima_award.jpg";
import SimaAward from "./images/Siima-Award-Image.jpg"
import Contact from "./Contact.js"

export const Home = () => {
    const [toggleState, setToggleState] = useState(1);
    const navigate = useNavigate();
    
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const handleBannerClick = () => {
        navigate('/Signup');
    }

    const handleFindActorClick = () => {
        navigate('/allActors');
    }

    return (
        <div>
            <div className="actor-banner" onClick={handleBannerClick}>
                <h2>Are you want to become an Actor?</h2>
                <p>Click here to join our community!</p>
            </div>
            <div className="find-actor-banner" onClick={handleFindActorClick}>
                <h2>Need an Actor?</h2>
                <p>Click here to find a best Actor</p>
            </div>
            <div className="container">
                {/* tabs component starts here */}
                <div className="tab-container">
                    <button className={toggleState === 1 ? "tab1  active-tabs " : "tab1 "} onClick={() => toggleTab(1)}
                    >Latest Movies</button>
                    <button className={toggleState === 2 ? "tab2  active-tabs " : "tab2 "} onClick={() => toggleTab(2)}
                    >Up Comming Movies</button>
                    <button className={toggleState === 3 ? "tab3  active-tabs " : "tab3 "} onClick={() => toggleTab(3)}
                    >Something</button>
                </div>
                <div className="Content-container">
                    <div className={toggleState === 1 ? "active-content" : "content"}>
                        <div className="banner">
                            <img className="card-img-top" src={pushpa2Poster} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="button">Go somewhere</a>
                            </div>
                        </div>
                        <div className="banner">
                            <img className="card-img-top" src={Anaadaposter} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="button">Go somewhere</a>
                            </div>
                        </div>
                        <div className="banner">
                            <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="button">Go somewhere</a>
                            </div>
                        </div>
                        <div className="banner">
                            <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="button">Go somewhere</a>
                            </div>
                        </div>
                        <div className="banner">
                            <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="button">Go somewhere</a>
                            </div>
                        </div>

                    </div>
                    <div className={toggleState === 2 ? "active-content " : "content"}>
                        <div className="banner">
                            <img className="card-img-top" src={rotikapadaromancePoster} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="button">Go somewhere</a>
                            </div>
                        </div>
                        <div className="banner">
                            <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="button">Go somewhere</a>
                            </div>
                        </div>
                        <div className="banner">
                            <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="button">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 3 ? "active-content " : "content"} >
                        <div className="banner">
                            <img className="card-img-top" src={pushpa2Poster} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="button">Go somewhere</a>
                            </div>
                        </div>
                        <div className="banner">
                            <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="button">Go somewhere</a>
                            </div>
                        </div>
                        <div className="banner">
                            <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="button">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tabs component ends here */}
                
                {/* movie industry Roles start here */}

                
                {/* movie industry Roles ends here */}

                {/* Carousel components starts */}
                <div id="carouselExampleCaptions" className="carousel slide mt-5" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={SimaAward} className="d-block w-100  homepagebg_img" alt="img1"></img>
                            <div className="carousel-caption d-none d-md-block">
                                <a className="singleroom" aria-label="take me to singleroom" href='#'><h1>some thing About It</h1></a>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={PushpaAward} className="d-block w-100 homepagebg_img" alt="img2"></img>
                            <div className="carousel-caption d-none d-md-block">
                                <a className="deluxe" aria-label="take me to deluxe" href='#'><h1>some thing About It</h1></a>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={nationalfilmawards} className="d-block w-100 homepagebg_img" alt="img3"></img>
                            <div className="carousel-caption d-none d-md-block">
                                <a className="suite" aria-label="take me to suite" href='#'><h1>some thing About It</h1></a>

                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <Contact />

            </div>

            <footer className="simple-footer">
                <p>
                    &copy; {new Date().getFullYear()} Film Club | 
                    <a href="mailto:filmclub.bbm@gmail.com"> filmclub.bbm@gmail.com</a>
                </p>
                <p>
                    <a href="#top" className="back-to-top">Back to top &uarr;</a>
                </p>
            </footer>
        </div>

    )
}
