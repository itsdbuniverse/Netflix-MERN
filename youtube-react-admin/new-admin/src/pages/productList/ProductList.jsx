import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from "../../context/movieContext/ApiCalls"
import { deleteMovie } from "../../context/movieContext/ApiCalls"

export default function ProductList() {
  const navigate = useNavigate();
  const { movies, dispatch } = useContext(MovieContext);  //calling the data drom movieContext

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "year", width: 120 },
    { field: "limit", headerName: "limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={{ pathname: "/product/" + params.row._id, state:"fsdfdsf" }}>  */}
            <button onClick={() => navigate(`/product/${params.row._id}`, { state: params.row })} className="productListEdit">Edit</button>
            {/* </Link> */}
            <DeleteOutline
              className="productListDelete"
              onClick={() => console.log(params.row._id)/*handleDelete(params.row._id)*/}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8, 15, 25]}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}


