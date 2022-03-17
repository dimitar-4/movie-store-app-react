import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import Errors from "./Errors";

function OrderDetails() {
  const { orderId } = useParams();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState();
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/api/orders/" + orderId)
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
