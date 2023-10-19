import axios from "axios";
import "./newList.css";
import { useContext, useEffect, useState } from "react";
import { createMovie } from "../../context/movieContext/ApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext"
import { ListContext } from "../../context/listContext/ListContext"
import { getMovies } from "../../context/movieContext/ApiCalls";
// import { useHistory } from "react-router-dom";
// import storage from "../../firebase";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


export default function NewList() {
  const [list, setList] = useState(null);
  // const history = useHistory();


  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie)
  }, [dispatchMovie])



  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    // console.log(e.target.selectedOptions);
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value })
  };

  // console.log(list);



  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list,dispatch);
    history.push("/list")

  }


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <button className="addProductButton">getLink</button>
      <form className="addProductForm">
    <div className="formleft">
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Popular Movies" name="title" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="action" name="genre" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select name="type" onChange={handleChange}>
          <option >Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        </div>

        <div className="formright">
        <div className="addProductItem">
          <label>Content</label>
          <select multiple name="content" onChange={handleSelect} style={{height: "280px"}}>
            {movies.map((movie) => (
              <option key={movie._id} value={movie._id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>
        </div>


        <button className="addProductButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
