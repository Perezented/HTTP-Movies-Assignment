import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Axios from 'axios';

const UpdateMovieForm = (props) => {
    console.log(props);
    const initialMovie = {
        title: '',
        director: '',
        metascore: '',
        stars: [{}],
    };
    const [updatedMovie, setUpdatedMovie] = useState(initialMovie);
    const { push } = useHistory();
    const { id } = useParams();
    useEffect(() => {
        Axios.get(`http://localhost:5000/api/movies/${id}`).then((res) => {
            console.log(res);
            setUpdatedMovie(res.data);
        });
    }, [id]);

    const handleChanges = (e) => {
        e.persist();
        let value = e.target.value;
        setUpdatedMovie({
            ...updatedMovie,
            [e.target.name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:5000/api/movies/${id}`, updatedMovie)
            .then((res) => {
                setUpdatedMovie(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:{' '}
                    <input
                        type="text"
                        name="title"
                        onChange={handleChanges}
                        value={updatedMovie.title}
                    />
                </label>
                <br />
                <label>
                    Director:{' '}
                    <input
                        type="text"
                        name="director"
                        onChange={handleChanges}
                        value={updatedMovie.director}
                    />
                </label>
                <br />
                <label>
                    Metascore:{' '}
                    <input
                        type="number"
                        name="metascore"
                        onChange={handleChanges}
                        value={updatedMovie.metascore}
                    />
                </label>
                <br />
                <label>
                    Stars:{' '}
                    <input
                        type="text"
                        name="stars"
                        onChange={handleChanges}
                        value={updatedMovie.stars}
                    />
                </label>
                <br />
                <button>Submit changes</button>
            </form>
        </section>
    );
};
export default UpdateMovieForm;
