import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiTwoCoins, GiUsbKey } from "react-icons/gi";
import { RiRefund2Line } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import Spinner from "./Spinner";
import Errors from "./Errors";
import { useBag } from "../contexts/BagContext";
import { API_URL } from "../config/api";

function Home() {
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState();
  const [movies, setMovies] = useState([]);
  const [classics, setClassics] = useState([]);
  const [errors, setErrors] = useState(null);

  const { addToBag } = useBag();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL + "/movies")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.status === 200) {
          setMovies(json.data.slice(4, 8));
          setClassics(json.data.slice(0, 4));
          setFeatured(json.data[20]);
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

  function seeMovies() {
    navigate("/movies/");
  }

  if (loading) return <Spinner />;
  if (errors) return <Errors errors={errors} />;
  return (
    <div>
      <div className="row px-3 mb-4">
        <h2 className="text-center mb-4 text-uppercase">A must see</h2>
        <div className="col-md-6 p-4 order-1 order-md-0">
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
            className="btn btn-warning shadow"
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
            className="d-block h-100 mx-auto shadow"
          />
        </div>
      </div>
      <div className="">
        <button
          className="btn btn-dark mb-4 w-100 movies-btn shadow fs-4 rounded-0 text-uppercase"
          onClick={seeMovies}
        >
          All Movies
        </button>
      </div>
      <div>
        <h2 className="text-center mb-4 text-uppercase">Popular Favorites</h2>
        <div className="row justify-content-center mb-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <div className="row bg-dark text-light mb-4 p-3 border-top border-bottom border-3 border-warning">
        <div className="col-12 col-md-4 text-center my-2">
          <p className="m-0">
            <MdOutlineLocalShipping className="fs-2 text-warning" />
          </p>
          <em>
            Shipment and delivery is always <strong>FREE</strong>!!!
          </em>
        </div>
        <div className="col-12 col-md-4 text-center my-2">
          <p className="m-0">
            <GiUsbKey className="fs-2 text-warning" />
          </p>
          <em>High quality physical formats!!!</em>
        </div>
        <div className="col-12 col-md-4 text-center my-2">
          <p className="m-0">
            <RiRefund2Line className="fs-2 text-warning" />
          </p>
          <em>
            <strong>FREE</strong> returns and refunds in 48 hours!!!
          </em>
        </div>
      </div>
      <div>
        <h2 className="text-center mb-4 text-uppercase">Classics</h2>
        <div className="row justify-content-center mb-5">
          {classics.map((movie) => (
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
        className="shadow"
        style={{ height: 300 }}
        src={movie.poster}
        alt={movie.title + " poster"}
      />
    </Link>
  );
}

export default Home;
