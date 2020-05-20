import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Axios from 'axios';

const UpdateMovieForm = () => {
    const initialMovie = {
        title: '',
        director: '',
        metascore: '',
        stars: {},
    };
    const [updatedMovie, setUpdatedMovie] = useState(initialMovie);
    const { push } = useHistory();
    const { id } = useParams();
    useEffect(() => {
        Axios.get(`http://localhost:5000/api/movies/${id}`).then((res) => {
            console.log(res);
            setUpdatedMovie(res.data);
        });
    }, []);

    return (
        <section>
            <form>
                <label>
                    Title: <input />
                </label>
                <br />
                <label>
                    Director: <input />
                </label>
                <br />
                <label>
                    Metascore: <input />
                </label>
                <br />
                <label>
                    Stars: <input />
                </label>
                <br />
                <button>Submit changes</button>
            </form>
        </section>
    );
};
export default UpdateMovieForm;
