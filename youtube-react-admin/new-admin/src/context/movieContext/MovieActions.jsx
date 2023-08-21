export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload : movies,
});

export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
});


///delete

export const deleteMovieStart = () => ({
    type: "GET_MOVIES_START",
});

export const deleteMovieSuccess = (id) => ({
    type: "GET_MOVIES_SUCCESS",
    payload : id,
});

export const deleteMovieFailure = () => ({
    type: "GET_MOVIES_FAILURE",
});

// //we gonna fetch this data into productList


