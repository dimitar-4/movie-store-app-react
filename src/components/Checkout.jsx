import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBag } from "../contexts/BagContext";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { API_URL } from "../config/api";

function Checkout() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const {
    state: { movies, totalAmount },
    clearBag,
  } = useBag();

  const navigate = useNavigate();

  function goBack() {
    navigate("/movies/");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify({
      user: {
        firstName,
        lastName,
        email,
        address: {
          street,
          city,
          state,
          zip,
          country,
        },
      },
      movies: movies.map((m) => ({
        movieId: m.id,
        quantity: m.quantity,
      })),
    });
    fetch(API_URL + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 201) {
          clearBag();
          navigate("/orders/" + json.data._id);
        } else alert("Something went wrong.");
      })
      .catch((err) => {
        alert("Something went wrong.");
      });
  }

  function isDisabled() {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !street ||
      !city ||
      !state ||
      !zip ||
      !country
    )
      return true;

    if (movies.length <= 0) return true;

    return false;
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-center text-uppercase">Checkout</h2>
      <div className="row p-3 p-md-0 mt-4">
        <div className="col-12 col-md-7 col p-2 mb-4 bg-dark">
          <h3 className="mb-4 text-light text-center">Billing Details</h3>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="form-control"
              name="street"
              placeholder="Street Address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="row mt-4">
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="city"
                placeholder="City/Town"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="state"
                placeholder="State/Region"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="zip"
                placeholder="Zip Code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="country"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
          <h3 className="mb-4 text-center">Order Review</h3>
          {movies.map((movie) => (
            <p key={movie.id} className="d-flex justify-content-between">
              <span>
                {movie.title}
                <strong>&nbsp;&times; {movie.quantity} </strong>
              </span>
              <strong>
                {parseFloat(movie.price * movie.quantity).toFixed(2)}
                &nbsp;{movie.currency}
              </strong>
            </p>
          ))}
          <hr />
          <p className="d-flex justify-content-between">
            Subtotal <strong>{totalAmount} SEK</strong>
          </p>
          <p className="d-flex justify-content-between">
            Shipping
            <strong>FREE</strong>
          </p>
          <hr />
          <p className="d-flex justify-content-between">
            Total
            <strong>{totalAmount} SEK</strong>
          </p>
          <button
            className="btn btn-dark mt-4 d-flex justify-content-center align-items-center w-100 shadow"
            onClick={goBack}
          >
            <MdArrowBackIosNew />
            &nbsp; Continue Shopping
          </button>
          <button
            type="submit"
            className="btn btn-warning mt-4 d-block w-100 shadow"
            disabled={isDisabled()}
          >
            Complete Order <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </form>
  );
}

export default Checkout;
