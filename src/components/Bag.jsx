import Portal from "./Portal";
import { GiBasket } from "react-icons/gi";
import { useBag } from "../contexts/BagContext";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";

function Bag() {
  const {
    state: { movies },
    clearBag,
  } = useBag();

  return (
    <>
      <a
        className="btn btn-sm btn-dark ms-auto border-1 border-warning position-relative"
        data-bs-toggle="offcanvas"
        href="#bag"
        role="button"
        aria-controls="bag"
      >
        <GiBasket size={20} />
        <span className="visually-hidden">shopping bag</span>
        <span className="position-absolute top-0 start-100 translate-middle badge bg-warning text-dark border-1 border-dark">
          {movies.length}
          <span className="visually-hidden">items in shopping bag</span>
        </span>
      </a>
      <Portal>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="bag"
          aria-labelledby="bagLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title d-flex align-items-center"
              id="bagLabel"
            >
              <GiBasket />
            </h5>
            <button
              className="btn btn-link bg-danger text-light d-flex align-items-center py-1"
              style={{ textDecoration: "none" }}
              onClick={() => clearBag()}
            >
              Clear&nbsp;
              <GiBasket />
            </button>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column">
            <hr className="mt-0 mb-4" />
            {movies.map((m) => (
              <BagItem key={m.id} movie={m} />
            ))}
            <Link
              to="/checkout"
              className="btn btn-warning mt-auto d-flex justify-content-center align-items-center"
            >
              Checkout&nbsp;
              <FaMoneyCheck />
            </Link>
            <hr />
          </div>
        </div>
      </Portal>
    </>
  );
}

function BagItem({ movie }) {
  const { removeFromBag } = useBag();

  return (
    <p className="d-flex justify-content-between">
      <span>
        <Link
          to={"/movies/" + movie.id}
          className="text-dark fw-bolder"
          style={{ textDecoration: "none" }}
        >
          {movie.title}
        </Link>
        <em>&nbsp;&times;{movie.quantity}</em>
      </span>
      <span className="d-flex align-items-center">
        <em>
          {(parseFloat(movie.price) * movie.quantity).toFixed(2)}
          &nbsp;{movie.currency}
        </em>
        <MdDeleteForever
          onClick={() => removeFromBag(movie.id)}
          role="button"
          className="ms-1 bg-danger text-light rounded"
        />
      </span>
    </p>
  );
}

export default Bag;
