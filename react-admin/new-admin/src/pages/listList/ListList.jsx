import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect,useContext } from "react";
import { deleteList, getLists } from "../../context/listContext/ApiCalls";
import { ListContext } from "../../context/listContext/ListContext";

export default function ListList() {
  const navigate = useNavigate();
  const { lists, dispatch } = useContext(ListContext);  //calling the data drom movieContext

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id,dispatch)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "type", width: 150 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={{ pathname: "/product/" + params.row._id, state:"fsdfdsf" }}>  */}
            <button onClick={() => navigate(`/list/${params.row._id}`, { state: params.row })} className="productListEdit">Edit</button>
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
        rows={lists}
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


