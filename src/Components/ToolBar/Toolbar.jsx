import React, { Component } from 'react';

import Filter from '../Filter/Filter';
import './ToolBar.css';


class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    toggleFilter = (option) => {
        this.props.updateSortBy(option);
    }

    render() {
        return (
            <div className="toolbar-container">
                <div>
                    {this.props.count} movie found
                </div>

                <div>
                    <Filter
                        label="Sort by"
                        firstOption="Release Date"
                        secondOption="Rating"
                        location="right"
                        toggle={this.toggleFilter}
                    />
                </div>
            </div>
         );
    }
}

export default ToolBar;