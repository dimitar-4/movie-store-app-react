import { bagReducer } from "./bagReducer";
import { createContext, useReducer, useContext } from "react";

export const types = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  CLEAR: "CLEAR",
};

const Bag = createContext({
  state: {
    movies: [],
    totalAmount: "0.00",
  },
  dispatch: () => {},
  addToBag: (movie) => {},
  clearBag: () => {},
});

function BagContext({ children }) {
  const [state, dispatch] = useReducer(bagReducer, {
    movies: [],
    totalAmount: "0.00",
  });

  function addToBag(movie) {
    dispatch({ type: types.ADD, payload: movie });
  }

  function clearBag() {
    dispatch({ type: types.CLEAR });
  }

  return (
    <Bag.Provider value={{ state, dispatch, addToBag, clearBag }}>
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
