import { useParams } from "react-router-dom";

function MovieDetails() {
    const { movieId } = useParams()

    return (
        <div>
            <h1>Movie Details</h1>
            <p>Movie ID: {movieId}</p>
        </div>
    )
}

export default MovieDetails;