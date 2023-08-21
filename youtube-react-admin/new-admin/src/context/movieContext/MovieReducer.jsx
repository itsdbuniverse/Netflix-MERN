//Actions according to that it will update the context

const MovieReducer = (state, action) => {
    switch (action.type) {
        case "GET_MOVIES_START":
            return {
                movies: [],
                isFetching: true,
                error: false,
            };
    case "GET_MOVIES_SUCCESS":
            return {
                movies: action.payload,
                isFetching: false,
                error: false,
            };
    case "GET_MOVIES_FAILURE":
            return {
                movies: [],
                isFetching: false,
                error: true,
            };

            //delete

            case "DELETE_MOVIES_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
    case "DELETE_MOVIES_SUCCESS":
            return {
                movies: state.movies.filter((movie)=> movie.id !== action.payload),
                isFetching: false,
                error: false,
            };
    case "DELETE_MOVIES_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
    default: 
    return{ ...state };
}
};

export default MovieReducer;

