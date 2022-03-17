import { types } from "./BagContext";

export function bagReducer(state, action) {
    switch (action.type) {
        case types.ADD:
            return {
                ...state,
                movies: addOrUpdate(state.movies, action.payload),
            };
        case types.REMOVE:
            return {
                ...state,
                movies: state.movies.filter((m) => m.id !== action.payload.id),
            };
        case types.CLEAR:
            return {
                ...state,
                movies: [],
                totalAmount: 0.00,
            };
        case types.CALCULATE_TOTAL:
            return {
                ...state,
                totalAmount: calculateTotal(state.movies),
            }
        default:
            return state;
    }
}

function calculateTotal(movies) {
    return movies.reduce((acc, movie) => acc + movie.price * movie.quantity, 0).toFixed(2);
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
