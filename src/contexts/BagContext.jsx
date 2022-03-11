import { bagReducer } from "./bagReducer";

import { createContext, useReducer, useContext } from "react";

const Bag = createContext({
    state: {
        movies: [],
        totalAmount: "0.00",
    },
    dispatch: () => {}
});

function BagContext({ children }) {
    const [state, dispatch] = useReducer(bagReducer, {
        movies: [],
        totalAmount: "0.00",
    });

    return <Bag.Provider value={{ state, dispatch }}>{children}</Bag.Provider>;
}

export function useBag() {
    const context = useContext(Bag);
    if (context === undefined) {
        throw new Error(" useBag must be used within a BagProvider")
    }
    return context
}

export default BagContext;

