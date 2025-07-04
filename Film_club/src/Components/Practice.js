import React from 'react';
import "./Practice.css";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./home.css"
// import Navbar from "./Navbar.js";
import pushpa2Poster from "./images/pushpa2_mve_poster.jpg";
import Anaadaposter from "./images/Anaada_mve_poster.jpg";
import BachalaPoster from "./images/Bachala_mali_mve_poster.jpg";
// import mechanicrockyPoster from "./images/mechanicrocky_mve_poster.jpg"
import rotikapadaromancePoster from "./images/rotikapadaromance_mve_poster.jpg"
import nationalfilmawards from "./images/national-film-awards.webp";
import PushpaAward from "./images/pushpa_sima_award.jpg";
import SimaAward from "./images/Siima-Award-Image.jpg"
import Contact from "./Contact.js"

const teams = [
    { name: '🎬 Production Team', roles: ['Director', 'Producer', 'Screenwriter'] },
    { name: '📹 Camera & Visuals', roles: ['Cinematographer', 'Camera Operator'] },
    { name: '🎭 Acting & Performance', roles: ['Actors/Actresses', 'Stunt Coordinator'] },
    { name: '🎨 Art & Design', roles: ['Production Designer', 'Costume Designer'] },
    { name: '🎶 Sound & Music', roles: ['Sound Designer', 'Composer'] },
    { name: '💻 Post-Production', roles: ['Film Editor', 'VFX Artist'] },
    { name: '🗂️ Support & Logistics', roles: ['Production Assistant (PA)', 'Location Manager'] }
];

const Practice = () => {

     const [toggleState, setToggleState] = useState(1);
        // const [bColor, setBcolor] = useState();
        // const bgColor = () => {
        //     setBcolor = "#4a4d4b"
        // }
        const toggleTab = (index) => {
            setToggleState(index);
        }
    return (
        <div className="container">
            <header className="header">
                <h1>Behind the Scenes: Movie Industry Roles</h1>
                <p>Discover the teams and people who bring movies to life.</p>
            </header>
            <section className="content">
                {teams.map((team, index) => (
                    <div className="team" key={index}>
                        <h2>{team.name}</h2>
                        <div className="roles">
                            {team.roles.map((role, i) => (
                                <div className="role" key={i}>
                                    {role}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* tab- Practice */}

            <div className="tab-container">
                <button className={toggleState === 1 ? "tab1  active-tabs " : "tab1 "} onClick={() => toggleTab(1)}
                >Latest Movies</button>
                <button className={toggleState === 2 ? "tab2  active-tabs " : "tab2 "} onClick={() => toggleTab(2)}
                >Up Comming Movies</button>
                <button className={toggleState === 3 ? "tab3  active-tabs " : "tab3 "} onClick={() => toggleTab(3)}
                >Something</button>

            </div>
            <div className="Content-container">
                <div className={toggleState === 1 ? "active-content row" : "content"}>
                    <div className="card col-lg-3 col-md-12 p-0">
                        <img className="card-img-top" src={pushpa2Poster} alt="img"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col-lg-3 col-md-12 p-0">
                        <img className="card-img-top" src={Anaadaposter} alt="img"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col-lg-3 col-md-12 p-0">
                        <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col-lg-3 col-md-12 p-0">
                        <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col-lg-3 col-md-12 p-0">
                        <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div className={toggleState === 2 ? "active-content row" : "content"}>
                    <div className="card col p-0">
                        <img className="card-img-top" src={rotikapadaromancePoster} alt="img"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col p-0">
                        <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="button">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col p-0">
                        <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 3 ? "active-content row" : "content"} >
                    <div className="card col p-0">
                        <img className="card-img-top" src={pushpa2Poster} alt="img"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col p-0">
                        <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col p-0">
                        <img className="card-img-top" src={BachalaPoster} alt="img"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Practice;
