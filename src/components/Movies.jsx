import {Movie} from './Movie';

function Movies(props) {
    const {movies = []} = props;
    return (
        <div>
            <div className="cards-list"> 
                { movies.length ? 
                movies.map(movie => <Movie key={movie.imdbID} movie={movie}/>)
                : <h4>Nothing found</h4>}
            </div>
        </div>
    )
}

export {Movies}