import {
    deleteMovieStart,
    deleteMovieSuccess,
    deleteMovieFailure,
    getMoviesFailure,
    getMoviesStart,
    getMoviesSuccess,
} from "./MovieActions"
import axios from "axios";
import { BaseUrl } from "../../../config";

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get(BaseUrl+"/movies", {
            headers: {
                token:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQzM2E3YzZmZGYzNzk0NjRhOGI5ZjQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTIwNDI4NTgsImV4cCI6MTY5NDYzNDg1OH0.ouut2iqz__G-iijmx6CKvFtnEFMREdkjrLC9weGcaFU",}
            },
        );
        dispatch(getMoviesSuccess(res.data))
    } catch (err) {
        dispatch(getMoviesFailure());
    }
};

//delete

export const deleteMovie = async (id,dispatch) => {
    dispatch(deleteMovieStart());
    try{
        await axios.delete(BaseUrl+"/movies/"+id, {
            headers: {
                token:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQzM2E3YzZmZGYzNzk0NjRhOGI5ZjQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTIwNDI4NTgsImV4cCI6MTY5NDYzNDg1OH0.ouut2iqz__G-iijmx6CKvFtnEFMREdkjrLC9weGcaFU",
            },
        });
        dispatch(deleteMovieSuccess(id));
    } catch(err){
        dispatch(deleteMovieFailure());
    }
};


