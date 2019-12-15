import React, { Component } from 'react';

import './SearchInput.css';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
         }
    }

    changeValue = (event) => {
        let value = event && event.target.value;

        this.setState({ inputValue: value });
    }

    searchFilm = () => {
        this.props.search(this.state.inputValue);
    }

    render() {
        return (
            <div className="search-input-container">
                <input onChange={this.changeValue} type="text" className="input"/>
                <button onClick={this.searchFilm} className="button">Search</button>
            </div>
        );
    }
}

export default SearchInput;