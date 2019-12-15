import React, { Component } from 'react';

import SearchInput from '../SearchInput/SearchInput';
import Filter from '../Filter/Filter';
import './searchSection.css';

class SearchSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBy: 'title',
         }
    }

    updateSearchBy = (option) => {
        this.setState({ searchBy: option });
    }

    doSearch = (searchValue) => {
        this.props.searchBy(this.state.searchBy, searchValue);
    }

    render() {
        return (
            <div className="search-section-container">
                <div className="content">
                    <h1 className="title">FIND YOUR MOVIE</h1>
                    <SearchInput
                        search={this.doSearch}
                    />

                    <Filter
                        label="Search By"
                        firstOption="title"
                        secondOption="genre"
                        location="left"
                        toggle={this.updateSearchBy}
                    />
                </div>
            </div>
        );
    }
}

export default SearchSection;