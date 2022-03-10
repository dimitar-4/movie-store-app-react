import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movies() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/api/movies")
            .then((response) => response.json())
            .then((json) => {
                if (json.status === 200) {
                    setMovies(json.data);
                } else {
                    setErrors(json.errors ?? ["Sorry, something went wrong."]);
                }
                setLoading(false);
            })
            .catch((err) => {
                setErrors(["Sorry, something went wrong."]);
                setLoading(false);
            });
    }, [])

    if(loading) return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" style={{width: "3rem", height: "3rem"}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
    if (errors && errors.length > 0) return errors.map((e, i) => (
        <div key={i} className="alert alert-danger">
            <h4 className="alert-heading">Oops!</h4>
            <p>{e}</p>
        </div>
    ))
    return (
        <div>
            <h1>Movies</h1>
            {movies.map((movie) => (
                <div className="my-3">
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    )
}

export default Movies;