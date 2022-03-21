import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import Errors from "./Errors";
import { MdArrowBackIosNew } from "react-icons/md";
import { API_URL } from "../config/api";

function OrderDetails() {
  const { orderId } = useParams();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(API_URL + "/orders/" + orderId)
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) setOrder(json.data);
        else setErrors(["Order not found."]);
      })
      .catch((err) => {
        setErrors(["Could not fetch order."]);
      })
      .finally(() => setLoading(false));
  }, [orderId]);

  function goBack() {
    navigate("/movies/");
  }

  if (loading) return <Spinner />;
  if (errors) return <Errors errors={errors} />;
  return (
    <div className="text-center">
      <h1 className="text-uppercase mb-4">Order</h1>
      <h2 className="text-secondary">{orderId}</h2>
      <h6 className="mb-4">
        <strong>{new Date(order.createdAt).toLocaleString()}</strong>
      </h6>
      {order.movies.map((movie) => (
        <Card key={movie.movieId} movie={movie} />
      ))}
      <button
        className="btn btn-dark mx-2 my-4 d-flex align-items-center shadow"
        onClick={goBack}
      >
        <MdArrowBackIosNew /> &nbsp;Back
      </button>
    </div>
  );
}

function Card({ movie }) {
  return (
    <div className="bg-dark text-light px-3 py-4 mb-2 rounded d-flex justify-content-between align-items-center">
      <p className="m-0">
        {movie.title}&nbsp;
        <em>&times;{movie.quantity}</em>
      </p>
      <p className="m-0">
        <em>{(parseFloat(movie.price) * movie.quantity).toFixed(2)} SEK</em>
      </p>
    </div>
  );
}

export default OrderDetails;
