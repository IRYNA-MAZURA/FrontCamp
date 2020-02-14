import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { Header } from './Header';

const mockStore = configureStore([]);
const store = mockStore({
    search:
    {
        searchBy: 'title',
        value: 'Harry Potter'
    }    
});

describe('Header component', () => {
    it('snapshot testing', () => {
        const wrapper = renderer.create(<Provider store={store}><Router><Header /></Router></Provider>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});