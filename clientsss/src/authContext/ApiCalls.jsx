import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
import { BaseUrl } from "../../config";


export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try{
        const res = axios.post(BaseUrl+"auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
};