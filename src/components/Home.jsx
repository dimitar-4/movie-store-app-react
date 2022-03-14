import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiTwoCoins } from "react-icons/gi";

function Home() {
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState();
  const [movies, setMovies] = useState([]);
  const [errors, setErrors] = useState(null);

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

  if (loading)
    return (
      <div className="d-flex align-items-center fs-4">
        <strong>Loading...</strong>
        <div
          className="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
  else if (errors && errors.length > 0)
    return errors.map((e, i) => (
      <div key={i} className="alert alert-danger">
        <h4 className="alert-heading">Oops!</h4>
        <p>{e}</p>
      </div>
    ));
  return (
    <div>
      <div className="row p-5">
        <h2 className="text-center mb-4 text-uppercase">Bestseller</h2>
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
          <button className="btn btn-warning">
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
