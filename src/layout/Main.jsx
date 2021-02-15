import React, { Component } from "react";
import {Movies} from '../components/Movies';
import {Search} from '../components/Search';
import {Preloader} from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            totalResults: '',
            loading: true
        }
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(response => response.json())
        .then(data => this.setState(
            {
                movies: data.Search,
                totalResults: data.totalResults,
                loading: false
            }
        ))
        .catch((err) => {
            console.error(err);
            this.setState({loading: false})
        });
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true});
        if (!str) {
            return;
        }

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&${type !== 'all' ? `type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState(
            {
                movies: data.Search,
                totalResults: data.totalResults,
                loading: false
            }
        ))
        .catch((err) => {
            console.error(err);
            this.setState({loading: false})
        });
    }

    render() {
        const {movies, loading} = this.state;
        return (
            <main className="content">
                <Search searchMovies={this.searchMovies} />
                {!loading ? <Movies movies={movies}/> : <Preloader />}
            </main>
        )
    }
}