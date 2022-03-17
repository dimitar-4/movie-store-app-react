import { bagReducer } from "./bagReducer";
import { createContext, useReducer, useContext, useEffect } from "react";

export const types = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  CLEAR: "CLEAR",
  CALCULATE_TOTAL: "CALCULATE_TOTAL",
};

const Bag = createContext({
  state: {
    movies: [],
    totalAmount: "0.00",
  },
  dispatch: () => {},
  addToBag: (movie) => {},
  clearBag: () => {},
  removeFromBag: (movieId) => {},
});

function BagContext({ children }) {
  const [state, dispatch] = useReducer(
    bagReducer,
    JSON.parse(localStorage.getItem("bag")) || {
      movies: [],
      totalAmount: "0.00",
    }
  );

  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(state));
  }, [state]);

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

  return (
    <Bag.Provider
      value={{
        state,
        dispatch,
        addToBag,
        clearBag,
        removeFromBag,
        calculateTotal,
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
