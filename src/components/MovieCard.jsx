import { Link, useNavigate } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { useBag } from "../contexts/BagContext";

function MovieCard({ movie }) {
  const { addToBag } = useBag();
  const navigate = useNavigate();

  function handleBuy() {
    addToBag(movie);
    navigate("/checkout/");
  }

  return (
    <div className="bg-dark text-white d-flex flex-column flex-md-row h-100 shadow border-top border-bottom border-3 border-warning">
      <div>
        <img
          src={movie.poster}
          alt={movie.title + " poster"}
          className="d-flex h-100 mx-auto mx-md-0"
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
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          <p className="m-0 fw-bolder">
            {movie.price} {movie.currency}
          </p>
          <div className="mt-3 mt-md-0">
            <Link to={"/movies/" + movie.id} className="btn btn-light me-2">
              <BsInfoCircle className="mb-1" /> Info
            </Link>
            <button
              className="btn btn-warning"
              onClick={handleBuy}
              disabled={movie.stock <= 0}
            >
              <GiTwoCoins /> Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
