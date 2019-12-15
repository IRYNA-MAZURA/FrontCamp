import React, { Component } from 'react';

import './FilmCard.css';

class FilmCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className="film-card-container">
                <img className="image" src={this.props.item.img} alt="film"/>
                <p>{this.props.item.title}</p>
                <div className="film-card-info">
                    <span>{this.props.item.date}</span>
                    <span>{this.props.item.rating} 	&#9733;</span>
                </div>
                <div className="film-card-genre">
                    <span>{this.props.item.genre}</span>
                </div>
            </div>
         );
    }
}

export default FilmCard;