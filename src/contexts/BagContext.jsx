import { bagReducer } from "./bagReducer";
import { createContext, useReducer, useContext, useEffect } from "react";

export const types = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  CLEAR: "CLEAR",
  CALCULATE_TOTAL: "CALCULATE_TOTAL",
  OPEN: "OPEN",
  CLOSE: "CLOSE",
  TOGGLE: "TOGGLE",
};

const Bag = createContext({
  state: {
    movies: [],
    totalAmount: "0.00",
    isOpen: false,
  },
  dispatch: () => {},
  addToBag: (movie) => {},
  clearBag: () => {},
  removeFromBag: (movieId) => {},
  openBag: () => {},
  closeBag: () => {},
  toggleBag: () => {},
});

function BagContext({ children }) {
  const [state, dispatch] = useReducer(bagReducer, {
    movies: JSON.parse(localStorage.getItem("bagMovies")) || [],
    totalAmount: "0.00",
    isOpen: false,
  });

  useEffect(() => {
    localStorage.setItem("bagMovies", JSON.stringify(state.movies));
  }, [state.movies]);

  useEffect(() => {
    calculateTotal();
  }, []);

  function addToBag(movie) {
    dispatch({ type: types.ADD, payload: movie });
    calculateTotal();
  }

  function removeFromBag(movie) {
    dispatch({ type: types.REMOVE, payload: movie });
    calculateTotal();
  }

  function clearBag() {
    dispatch({ type: types.CLEAR });
  }

  function calculateTotal() {
    dispatch({ type: types.CALCULATE_TOTAL });
  }

  function openBag() {
    dispatch({ type: types.OPEN });
  }

  function closeBag() {
    dispatch({ type: types.CLOSE });
  }

  function toggleBag() {
    dispatch({ type: types.TOGGLE });
  }

  return (
    <Bag.Provider
      value={{
        state,
        dispatch,
        addToBag,
        clearBag,
        removeFromBag,
        calculateTotal,
        openBag,
        closeBag,
        toggleBag,
      }}
    >
      {children}
    </Bag.Provider>
  );
}

export function useBag() {
  const context = useContext(Bag);
  if (context === undefined) {
    throw new Error(" useBag must be used within a BagProvider");
  }
  return context;
}

export default BagContext;
