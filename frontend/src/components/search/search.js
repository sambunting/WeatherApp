import React from 'react';

import './search.css';

class Search extends React.Component {
    textUpdate = (e) => {
        if (e.keyCode === 13) {
            this.props.onSearch(e.target.value);
            this.refs.input.disabled = true;

            setTimeout(this.refs.input.disabled = false, 100);
        }
    }

    render() {
        return (
            <div className="search">
            <input ref="input" type="text" id="search_input" name="search_input" placeholder="Search" onKeyDown={this.textUpdate}></input>
            <img src="icons/Compass-small.svg" onClick={this.props.onGeolocationRequest} alt="location"/>
            </div>
        )
    }
    
}

export default Search;