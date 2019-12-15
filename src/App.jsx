import React, { Component } from 'react';
import './App.css';

import SearchSection from './Components/SearchSection/SearchSection';
import ToolBar from './Components/ToolBar/Toolbar';
import Content from './Components/Content/Content';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';


import killBill from './images/killBill.png';
import killBill2 from './images/killBill2.png';
import pulpFiction from './images/pulpFiction.png';
import avengers from './images/avengers.png';


class App extends Component {
  constructor() {
    super();
    this.state = {
      allFilms: [
        {
          title: 'Pulp Fiction',
          genre: 'criminal',
          img: pulpFiction,
          date: '1994',
          rating: '8.6'
        },
        {
          title: 'Kill Bill',
          genre: 'detective',
          img: killBill,
          date: '2003',
          rating: '7.6'
        },
        {
          title: 'Avengers',
          genre: 'fantastic',
          img: avengers,
          date: '2019',
          rating: '7.5'
        },
        {
          title: 'Kill Bill 2',
          genre: 'detective',
          img: killBill2,
          date: '2004',
          rating: '7.6'
        },
      ],
      filmsToDisplay: [
        {
          title: 'Pulp Fiction',
          genre: 'Criminal',
          img: pulpFiction,
          date: '1994',
          rating: '8.6'
        },
        {
          title: 'Kill Bill',
          genre: 'Detective',
          img: killBill,
          date: '2003',
          rating: '7.6'
        },
        {
          title: 'Avengers',
          genre: 'Fantastic',
          img: avengers,
          date: '2019',
          rating: '7.5'
        },
        {
          title: 'Kill Bill 2',
          genre: 'Detective',
          img: killBill2,
          date: '2004',
          rating: '7.6'
        },
      ],
      sortBy: '',
     }
  }

  updateSortByProperty = (option) => {
    this.setState({sortBy: option});
  }

  findFilms = (searchBy, value) => {
    let arr = this.state.allFilms.filter((film) => {
      return film[searchBy].toLowerCase().includes(value.toLowerCase());
    });

    this.setState({filmsToDisplay: arr});
  }


  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <SearchSection
            searchBy={this.findFilms}
          />

          <ToolBar
            updateSortBy={this.updateSortByProperty}
            count={this.state.filmsToDisplay.length ? this.state.filmsToDisplay.length: this.state.allFilms.length}
          />

          {this.state.filmsToDisplay.length ?
            <Content
              filmsArray={this.state.filmsToDisplay}
              sortBy={this.state.sortBy}
            /> :
            <h4 className="noFilmsFound">No films found</h4>
          }

        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
