import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Errors from "./Errors";
import Spinner from "./Spinner";
import { FaStar } from "react-icons/fa";
import { useBag } from "../contexts/BagContext";
import { GiTwoCoins, GiBasket, GiDirectorChair } from "react-icons/gi";
import { MdArrowBackIosNew } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { API_URL } from "../config/api";

function MovieDetails() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [errors, setErrors] = useState(null);

  const { addToBag } = useBag();
  const navigate = useNavigate();

  function handleBuy() {
    addToBag(movie);
    navigate("/checkout/");
  }

  function goBack() {
    navigate("/movies/");
  }

  useEffect(() => {
    fetch(API_URL + "/movies/" + movieId)
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
    <div className="my-4 p-3 bg-img border border-2 border-warning">
      <div className="row my-4">
        <div className="col order-1 order-md-0">
          <h1 className="mt-3">{movie.title}</h1>
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
            <span>
              <GiDirectorChair className="mb-1" /> {movie.director}
            </span>
            <span className="mx-2">|</span>
            <span>{movie.length} minutes</span>
          </p>
          <hr />
          <p className="text-dark">{movie.plot}</p>
          <hr />
          <p>
            <BsStars className="mb-1" />{" "}
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
        </div>
        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
          <img
            className="img-fluid shadow"
            style={{ maxHeight: "75vh", width: "300px" }}
            src={movie.poster}
            alt={movie.title + " poster"}
          />
        </div>
      </div>
      <div className="card text-white bg-dark text-center rounded-0 mt-4">
        <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center">
          <h5 className="card-title">
            {movie.price} <strong>{movie.currency}</strong>
          </h5>
          {movie.stock > 0 ? (
            <small className="my-2">
              <strong className="fst-italic" style={{ color: "#61d684" }}>
                In Stock
              </strong>
            </small>
          ) : (
            <small className="my-2" style={{ color: "#e78181" }}>
              <strong>Out of Stock</strong>
            </small>
          )}
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-light mx-2 d-flex align-items-center"
              onClick={() => addToBag(movie)}
              disabled={movie.stock <= 0}
            >
              Add to &nbsp;
              <GiBasket />
            </button>
            <button
              className="btn btn-warning mx-2"
              onClick={handleBuy}
              disabled={movie.stock <= 0}
            >
              <GiTwoCoins /> Buy
            </button>
          </div>
        </div>
      </div>
      <button
        className="btn btn-dark mx-2 my-4 d-flex align-items-center shadow"
        onClick={goBack}
      >
        <MdArrowBackIosNew /> &nbsp;Back
      </button>
    </div>
  );
}

export default MovieDetails;
