import React from 'react';

export default function MovieCards(props) {

    return (
        <div className='movie'>
            <div className='movieYear'>
                <p>{props.movies.Year}</p>
            </div>

            <div className='moviePoster'>
                <img src={props.movies.Poster !== "N/A" ? props.movies.Poster : "https://via.placeholder.com/400"} alt={props.Title} />
            </div>

            <div className='movieDetails'>
                <span>{props.movies.Type}</span>
                <h3>{props.movies.Title}</h3>
            </div>
        </div>
    )
}