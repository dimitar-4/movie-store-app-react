import { Link } from "react-router-dom";
import Bag from "./Bag";
import { GiPopcorn } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-light bg-dark mb-4">
      <div className="container-fluid">
        <Link
          className="navbar-brand text-light fs-3 ms-4 d-flex align-items-center"
          to="/"
        >
          <strong className="text-warning">S</strong>creen
          <strong className="text-warning">G</strong>oldies
          <GiPopcorn className="text-warning fs-3" />
        </Link>
        <button
          className="navbar-toggler bg-warning"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-uppercase fw-normal ms-5">
            <li className="nav-item">
              <Link
                className="nav-link text-light active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/orders">
                Orders
              </Link>
            </li>
          </ul>
          <Bag />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
