import React, { Component } from 'react';
import classnames from 'classnames';

import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = { activeButton: this.props.firstOption }
    }

    toggleFilter = (option) => {
        this.setState({activeButton: option});
        this.props.toggle(option);
    }


    render() {
        return (
            <div className="filter">
                <span>{this.props.label}</span>
                <div className="filter-buttons-container">
                    <button
                        onClick={() => this.toggleFilter(this.props.firstOption)}
                        className={classnames('filter-button', {'active-button': this.state.activeButton === this.props.firstOption})}>
                            {this.props.firstOption}
                    </button>

                    <button
                        onClick={() => this.toggleFilter(this.props.secondOption)}
                        className={classnames('filter-button', {'active-button': this.state.activeButton === this.props.secondOption})}>
                            {this.props.secondOption}
                    </button>
                </div>
            </div>
        );
    }
}

export default Filter;