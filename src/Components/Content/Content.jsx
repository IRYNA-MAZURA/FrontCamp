import React, { Component } from 'react';

import FilmCard from '../FilmCard/FilmCard';

import './Content.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    sortFilms = () => {
        let filterBy = this.props.sortBy === 'Rating' ? 'rating' : 'date';

        let sortedArray = this.props.filmsArray.sort((a, b) => a[filterBy] > b[filterBy] ? 1 : -1);

        return sortedArray.map((film, index) => {
            return <FilmCard key={index} item={film}/>;
        });
    }

    render() {
        return (
            <div className="content-container">
                {
                    this.sortFilms()
                }
            </div>
         );
    }
}

export default Content;