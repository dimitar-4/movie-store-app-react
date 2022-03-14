import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Errors from "./Errors";
import Spinner from "./Spinner";
import { FaStar } from "react-icons/fa";

function MovieDetails() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/movies/" + movieId)
      .then((res) => res.json())
      .then((json) => {
        switch (json.status) {
          case 200:
            setMovie(json.data);
            break;
          case 404:
            setErrors(["Movie not found."]);
            break;
          default:
            setErrors(json?.error ?? ["Could not fetch movie."]);
            break;
        }
      })
      .catch(() => setErrors(["Could not fetch movie."]))
      .finally(() => setLoading(false));
  }, [movieId]);

  if (loading) return <Spinner />;
  if (errors) return <Errors errors={errors} />;

  return (
    <div className="row mb-4">
      <div className="col">
        <h1>{movie.title}</h1>
        <p>
          <span>{movie.year}</span>
          <span className="mx-2">|</span>
          <span>
            {movie.genres.map((g, i) =>
              i === movie.genres.length - 1 ? g : g + ", "
            )}
          </span>
        </p>
        <p>
          <span>{movie.director}</span>
          <span className="mx-2">|</span>
          <span>{movie.length} minutes</span>
        </p>
        <p className="text-secondary">{movie.plot}</p>
        <p>
          {movie.stars.map((s, i) =>
            i === movie.stars.length - 1 ? s : s + ", "
          )}
        </p>
        <div className="badge bg-warning text-dark p-2 fw-bold mb-4">
          <a
            className="text-dark d-flex align-items-center"
            href={movie.imdbUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            IMDb <FaStar className="mx-1" />
            {movie.imdbRating}
          </a>
        </div>
        <div className="card text-white bg-dark text-center">
          <div className="card-body">
            <h5 className="card-title">
              {movie.price} <strong>{movie.currency}</strong>
            </h5>
            {movie.stock > 0 ? (
              <small>
                <strong className="fst-italic" style={{ color: "#61d684" }}>
                  In Stock
                </strong>
              </small>
            ) : (
              <small style={{ color: "#e78181" }}>
                <strong>Out of Stock</strong>
              </small>
            )}
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-primary mx-2">Purchase</button>
              <button className="btn btn-light mx-2">Add to Bag</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-5 d-flex justify-content-center align-items-center">
        <img
          className="rounded img-fluid"
          style={{ maxHeight: "75vh", width: "300px" }}
          src={movie.poster}
          alt={movie.title + " poster"}
        />
      </div>
    </div>
  );
}

export default MovieDetails;
