import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const MovieCard = (props) => {
    const { title, director, metascore, stars } = props.movie;
    const { state, setState } = useState(props.movie);
    const { push } = useHistory();

    return (
        <div className="movie-card">
            <h2>{title}</h2>
            <div className="movie-director">
                Director: <em>{director}</em>
            </div>
            <div className="movie-metascore">
                Metascore: <strong>{metascore}</strong>
            </div>
            <h3>Actors</h3>

            {stars.map((star) => (
                <div key={star} className="movie-star">
                    {star}
                </div>
            ))}
            <br />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    console.log(props.movie);
                    Axios.delete(
                        `http://localhost:5000/api/movies/${props.movie.id}`
                    )
                        .then((res) => {
                            push('/');
                            window.location.reload();

                            return res.data;
                            // res.data;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default MovieCard;
