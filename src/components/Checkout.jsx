import { useState } from "react";
import { useBag } from "../contexts/BagContext";

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
  } = useBag();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting form");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center">Checkout</h1>
      <div className="row mt-4">
        <div className="col pe-4">
          <h2 className="mb-4">Billing Details</h2>
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
        <div className="col-5 col-lg-4 offset-lg-1">
          <h2 className="mb-4">Order Review</h2>
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
          <button type="submit" className="btn btn-warning mt-4 d-block w-100">
            Submit Order
          </button>
        </div>
      </div>
    </form>
  );
}

export default Checkout;
