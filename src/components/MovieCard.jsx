import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";

function MovieCard({ movie }) {
  return (
    <div className="bg-dark text-white rounded d-flex h-100">
      <div>
        <img
          src={movie.poster}
          alt={movie.title + " poster"}
          className="d-flex h-100 rounded"
          style={{ width: 175 }}
        />
      </div>
      <div className="p-4 flex-grow-1">
        <h2>{movie.title}</h2>
        <div className="d-flex">
          <p className="me-1">{movie.year}</p>
          <p className="me-1">|</p>
          <p>
            {movie.genres.map((g, i) =>
              i === movie.genres.length - 1 ? g : g + ", "
            )}
          </p>
        </div>
        <p>{movie.description}</p>
        <div className="d-flex align-items-center justify-content-between">
          <p className="fw-bold m-0">
            {movie.price} {movie.currency}
          </p>
          <div>
            <Link to={"/movies/" + movie.id} className="btn btn-light me-2">
              <BsInfoCircle className="mb-1" /> Info
            </Link>
            <button className="btn btn-warning">
              <GiTwoCoins /> Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
