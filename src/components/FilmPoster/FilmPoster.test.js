import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { FilmPoster } from './FilmPoster';

const props = {
    film: {
        id: 1, 
        title: 'Harry Potter', 
        genres: ['fantasy'], 
        poster_path: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ebay.com.au%2Fitm%2FHARRY-POTTER-AND-THE-SORCERERS-STONE-MOVIE-POSTER-INTERNATIONAL-REGULAR-%2F122009198081&psig=AOvVaw1LDt0EqIHiVP4X7gHBXHY1&ust=1581665271313000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjn8beAzucCFQAAAAAdAAAAABAI', 
        release_date: '20/03/2000'
    }
};

describe('FilmPoster component', () => {
    it('snapshot testing', () => {
        const wrapper = renderer.create(<Router><FilmPoster {...props} /></Router>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});