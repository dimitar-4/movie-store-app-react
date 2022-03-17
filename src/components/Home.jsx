import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiTwoCoins } from "react-icons/gi";
import Spinner from "./Spinner";
import Errors from "./Errors";
import { useBag } from "../contexts/BagContext";

function Home() {
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState();
  const [movies, setMovies] = useState([]);
  const [errors, setErrors] = useState(null);

  const { addToBag } = useBag();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/movies")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.status === 200) {
          setMovies(json.data.slice(4, 8));
          setFeatured(json.data[1]);
        } else {
          setErrors(json.errors ?? ["Sorry! Something went wrong."]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setErrors(["Sorry! Something went wrong."]);
        setLoading(false);
      });
  }, []);

  function handleBuy() {
    addToBag(featured);
    navigate("/checkout/");
  }

  if (loading) return <Spinner />;
  if (errors) return <Errors errors={errors} />;
  return (
    <div>
      <div className="row p-5">
        <h2 className="text-center mb-4 text-uppercase">Bestseller</h2>
        <hr />
        <div className="col-md-6 p-4">
          <h1 className="mb-4">{featured.title}</h1>
          <div className="d-flex fw-bold">
            <p className="me-1">{featured.year}</p>
            <p className="me-1">|</p>
            <p>
              {featured.genres.map((g, i) =>
                i === featured.genres.length - 1 ? g : g + ", "
              )}
            </p>
          </div>
          <p>{featured.description}</p>
          <p className="fw-bold">
            {featured.price} {featured.currency}
          </p>
          <button
            className="btn btn-warning"
            onClick={handleBuy}
            disabled={featured.stock <= 0}
          >
            <GiTwoCoins /> Buy
          </button>
        </div>
        <div className="col-md-6 p-4">
          <img
            src={featured.poster}
            alt={featured.title + " poster"}
            className="d-block h-100 mx-auto rounded"
          />
        </div>
      </div>
      <div>
        <h2 className="text-center mb-4 text-uppercase">Popular Favorites</h2>
        <hr />
        <div className="row justify-content-center mb-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ movie }) {
  return (
    <Link
      to={"/movies/" + movie.id}
      className="my-2 col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center"
    >
      <img
        className="rounded"
        style={{ height: 300 }}
        src={movie.poster}
        alt={movie.title + " poster"}
      />
    </Link>
  );
}

export default Home;
