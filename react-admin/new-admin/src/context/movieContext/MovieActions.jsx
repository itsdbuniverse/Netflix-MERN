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

//UPDATING INTO DATABASE

export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
});

export const createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload : movie,
});

export const createMovieFailure = () => ({
    type: "CREATE_MOVIE_FAILURE",
});

//update

export const updateMovieStart = () => ({
    type: "UPDATE_MOVIE_START",
});

export const updateMovieSuccess = (movie) => ({
    type: "UPDATE_MOVIE_SUCCESS",
    payload : movie,
});

export const updateMovieFailure = () => ({
    type: "UPDATE_MOVIE_FAILURE",
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


