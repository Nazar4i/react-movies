function Movie(props) {
    const {
        Poster: poster,
        Title: title, 
        Year: year, 
        Type: type, 
        imdbID: id
    } = props.movie;
    return (
        <div id={id} className="card">
            <div className="card-image waves-effect waves-block waves-light">
                { poster === 'N/A' ? <img src={`https://via.placeholder.com/300x400?text=${title}`}/> : <img className="activator" src={poster}/> }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>Year: {year} <span className="right">Type: {type}</span></p>
            </div>
        </div>
    )
}

export {Movie}