//Actions according to that it will update the context

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN START":
            return {
                user: null,
                isFetching: true,
                error: false,
            };
    case "LOGIN SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
    case "FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            };
            case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false,
            };
    default: 
    return{ ...state };
}
};

export default AuthReducer;