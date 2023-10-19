import {
    createListStart,
    createListSuccess,
    deleteListFailure,
    deleteListStart,
    deleteListSuccess,
    getListsFailure,
    getListsStart, getListsSuccess,

} from "./ListActions"
import axios from "axios";
import { BaseUrl } from "../../../config";
import { createMovieFailure } from "../movieContext/MovieActions";


export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get(BaseUrl+"/lists", {
            headers: {
                token:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQzM2E3YzZmZGYzNzk0NjRhOGI5ZjQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTIwNDI4NTgsImV4cCI6MTY5NDYzNDg1OH0.ouut2iqz__G-iijmx6CKvFtnEFMREdkjrLC9weGcaFU",}
            },
        );
        dispatch(getListsSuccess(res.data))
    } catch (err) {
        dispatch(getListsFailure());
    }
};

//updating in database---create

export const createList = async (list,dispatch) => {
    dispatch(createListStart());
    try{
        const res = await axios.post(BaseUrl+"/lists", list, {
            headers: {
                token:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQzM2E3YzZmZGYzNzk0NjRhOGI5ZjQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTIwNDI4NTgsImV4cCI6MTY5NDYzNDg1OH0.ouut2iqz__G-iijmx6CKvFtnEFMREdkjrLC9weGcaFU",
            },
        });
        dispatch(createListSuccess(res.data));
    } catch(err){
        dispatch(createMovieFailure());
    }
};

//delete

export const deleteList = async (id,dispatch) => {
    dispatch(deleteListStart());
    try{
        await axios.delete(BaseUrl+"/lists/"+id, {
            headers: {
                token:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQzM2E3YzZmZGYzNzk0NjRhOGI5ZjQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTIwNDI4NTgsImV4cCI6MTY5NDYzNDg1OH0.ouut2iqz__G-iijmx6CKvFtnEFMREdkjrLC9weGcaFU",
            },
        });
        dispatch(deleteListSuccess(id));
    } catch(err){
        dispatch(deleteListFailure());
    }
};


