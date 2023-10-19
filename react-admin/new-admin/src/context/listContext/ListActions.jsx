export const getListsStart = () => ({
  type: "GET_LISTS_START",
});

export const getListsSuccess = (lists) => ({
  type: "GET_LISTS_SUCCESS",
  payload: lists,
});

export const getListsFailure = () => ({
  type: "GET_LISTS_FAILURE",
});

//UPDATING INTO DATABASE

export const createListStart = () => ({
    type: "CREATE_LIST_START",
});

export const createListSuccess = (list) => ({
    type: "CREATE_LIST_SUCCESS",
    payload : movie,
});

export const createListFailure = () => ({
    type: "CREATE_LIST_FAILURE",
});

//update

// export const updateMovieStart = () => ({
//     type: "UPDATE_MOVIE_START",
// });

// export const updateMovieSuccess = (movie) => ({
//     type: "UPDATE_MOVIE_SUCCESS",
//     payload : movie,
// });

// export const updateMovieFailure = () => ({
//     type: "UPDATE_MOVIE_FAILURE",
// });


///delete

export const deleteListStart = () => ({
    type: "GET_LIST_START",
});

export const deleteListSuccess = (id) => ({
    type: "GET_LIST_SUCCESS",
    payload : id,
});

export const deleteListFailure = () => ({
    type: "GET_LIST_FAILURE",
});

// //we gonna fetch this data into productList


