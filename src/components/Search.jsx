import React, {Component} from 'react';

class Search extends Component {

    state = {
        search: '',
        searchType: 'all'
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.searchType);
        }
    }

    handleChange = (event) => {
        this.setState(() => ({searchType: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.searchType);
        });
    }

    render() {
        const {search, searchType} = this.state;
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input 
                        placeholder="Search..." 
                        type="search" 
                        className="validate" 
                        value={search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.searchType)}>Search</button>
                </div>
                <div className="filter-wrap">
                <label>
                    <input 
                        type="radio"
                        name="searchType"
                        data-type="all"
                        checked={searchType === 'all'}
                        onChange={this.handleChange}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input 
                        type="radio"
                        name="searchType"
                        data-type="movie"
                        checked={searchType === 'movie'}
                        onChange={this.handleChange}
                    />
                    <span>Movies</span>
                </label>
                <label>
                    <input 
                        type="radio"
                        name="searchType"
                        data-type="series"
                        checked={searchType === 'series'}
                        onChange={this.handleChange}
                    />
                    <span>series</span>
                </label>
            </div>
            </div>
        )
    }
}

export {Search}