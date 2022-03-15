import Portal from "./Portal";
import { GiBasket } from "react-icons/gi";
import { useBag } from "../contexts/BagContext";

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
            <h5 className="offcanvas-title" id="bagLabel">
              Shopping Basket
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            {movies.map((m) => (
              <p key={m.id}>
                {m.title} - {m.quantity}
              </p>
            ))}
            <button className="btn btn-danger" onClick={() => clearBag()}>
              Clear Bag
            </button>
          </div>
        </div>
      </Portal>
    </>
  );
}

export default Bag;
