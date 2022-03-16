import { types } from "./BagContext";

export function bagReducer(state, action) {
    switch (action.type) {
        case types.ADD:
            return {
                ...state,
                movies: addOrUpdate(state.movies, action.payload),
                totalAmount: calculateTotal(state.totalAmount, action.payload.price, "ADD"),
            };
        case types.REMOVE:
            return {
                ...state,
                movies: state.movies.filter((m) => m.id !== action.payload.id),
                totalAmount: calculateTotal(state.totalAmount, action.payload.price, "REMOVE"),
            };
        case types.CLEAR:
            return {
                ...state,
                movies: [],
                totalAmount: 0.00,
            };
        default:
            return state;
    }
}

function calculateTotal(total, price, type) {
    let newTotal = parseFloat(total);
    switch (type) {
        case "ADD":
            newTotal = (newTotal + parseFloat(price)).toFixed(2);
            return newTotal;
        case "REMOVE":
            newTotal = (newTotal - parseFloat(price)).toFixed(2);
            return newTotal;
        default:
            throw new Error("Invalid action type");
    }
}

function addOrUpdate(movies, movie) {
    const index = movies.findIndex((m) => m.id === movie.id);
    if (index === -1) {
        return [...movies, { ...movie, quantity: 1 }]
    } else {
        return [
            ...movies.slice(0, index),
            { ...movies[index], quantity: movies[index].quantity + 1 },
            ...movies.slice(index + 1), 
        ];
    }
}
