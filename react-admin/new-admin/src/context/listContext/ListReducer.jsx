//Actions according to that it will update the context

const ListReducer = (state, action) => {
  switch (action.type) {
    case "GET_LISTS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_LISTS_SUCCESS":
      return {
        ...state,
        lists: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_LISTS_FAILURE":
      return {
        ...state,
        lists: [],
        isFetching: false,
        error: true,
      };

            //Update list

            

            /////////////for updating in database

            case "CREATE_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
    case "CREATE_MOVIE_SUCCESS":
            return {
                lists: [...state.lists, action.payload],
                isFetching: false,
                error: false,
            };
    case "CREATE_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };

            //update

    //         case "UPLOAD_MOVIE_START":
    //         return {
    //             ...state,
    //             isFetching: true,
    //             error: false,
    //         };
    // case "UPLOAD_MOVIE_SUCCESS":
    //         return {
    //             movies: state.movies.map(
    //                 (movie) => movie._id === action.payload._id && action.payload
    //             ),
    //             isFetching: false,
    //             error: false,
    //         };
    // case "UPLOAD_MOVIE_FAILURE":
    //         return {
    //             ...state,
    //             isFetching: false,
    //             error: true,
    //         };

            //delete

            case "DELETE_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
    case "DELETE_LIST_SUCCESS":
            return {
                lists: state.lists.filter((list)=> list.id !== action.payload),
                isFetching: false,
                error: false,
            };
    case "DELETE_LIST_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
    default: 
    return{ ...state };
}
};

export default ListReducer;

