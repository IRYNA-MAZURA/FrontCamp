import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../Logo';

import './MainFilm.css';

const MainFilm = ({film: {title, vote_average, poster_path, release_date, overview, runtime}}) => {
    return (
        <div className="film-wrapper">
            <div className="container">
                <Logo/>  
                <Link to="/"><div className="searchButton"></div></Link>
            </div>
            <div className="mainFilm">
                <div className="mainFilm-img">
                    <img src={poster_path} alt=""/>
                </div>
                <div className="mainFilm-info">
                    <div className="film-info-head">
                        <div className="head-title">
                            {title}
                        </div>
                        <div className="head-vote">
                            {vote_average}
                        </div>
                    </div>
                    <div className="film-info-dur">
                        <div className="dur-year">
                            {release_date && release_date.split('-')[0]} <span className="dur-span">year</span>
                        </div>
                        <div className="dur-runtime">
                            {runtime || 0} <span className="dur-span">min</span>
                        </div>
                    </div>
                    <div className="film-info-content">{overview}</div>
                </div>
            </div>
        </div>
    )
};

 export default MainFilm;
