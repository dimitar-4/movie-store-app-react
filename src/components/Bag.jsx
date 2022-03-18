import Portal from "./Portal";
import { GiBasket } from "react-icons/gi";
import { useBag, types as bagTypes } from "../contexts/BagContext";
import { Link, useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import { useEffect, useRef } from "react";

function Bag() {
  const {
    state: { movies, isOpen },
    clearBag,
    openBag,
    closeBag,
    dispatch,
  } = useBag();

  const location = useLocation();

  const offcanvasRef = useRef(undefined);
  const bsOffcanvasRef = useRef(undefined);

  useEffect(() => {
    if (bsOffcanvasRef.current) {
      if (isOpen) bsOffcanvasRef.current.show();
      else bsOffcanvasRef.current.hide();
    }
  }, [isOpen]);

  useEffect(() => {
    function onShow(e) {
      e.preventDefault();
      openBag();
    }

    function onHide(e) {
      e.preventDefault();
      closeBag();
    }

    if (offcanvasRef.current && bsOffcanvasRef.current) {
      offcanvasRef.current.addEventListener("show.bs.offcanvas", onShow);
      offcanvasRef.current.addEventListener("hide.bs.offcanvas", onHide);
    }

    return () => {
      if (offcanvasRef.current && bsOffcanvasRef.current) {
        offcanvasRef.current.removeEventListener("show.bs.offcanvas", onShow);
        offcanvasRef.current.removeEventListener("hide.bs.offcanvas", onHide);
      }
    };
  }, [openBag, closeBag]);

  useEffect(() => {
    dispatch({ type: bagTypes.CLOSE });
  }, [location, dispatch]);

  function setRefs(el) {
    if (el) {
      offcanvasRef.current = el;
      bsOffcanvasRef.current =
        window.bootstrap.Offcanvas.getOrCreateInstance(el);
    }
  }

  return (
    <>
      <button
        className="btn btn-sm btn-dark ms-auto border-1 border-warning position-relative"
        data-bs-toggle="offcanvas"
        data-bs-target="#bag"
        aria-controls="bag"
      >
        <GiBasket size={20} />
        <span className="visually-hidden">shopping bag</span>
        <span className="position-absolute top-0 start-100 translate-middle badge bg-warning text-dark border-1 border-dark">
          {movies.length}
          <span className="visually-hidden">items in shopping bag</span>
        </span>
      </button>
      <Portal>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="bag"
          aria-labelledby="bagLabel"
          ref={(el) => setRefs(el)}
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title d-flex align-items-center"
              id="bagLabel"
            >
              <GiBasket />
            </h5>
            <button
              className="btn btn-link bg-dark text-light d-flex align-items-center py-1 shadow"
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
              className="btn btn-warning mt-auto d-flex justify-content-center align-items-center shadow"
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
          onClick={() => removeFromBag(movie)}
          role="button"
          className="ms-1 bg-danger text-light rounded"
        />
      </span>
    </p>
  );
}

export default Bag;
