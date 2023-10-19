import axios from "axios";
import "./newProduct.css";
import { useContext, useState } from "react";
import { createMovie } from "../../context/movieContext/ApiCalls";
import { MovieContext} from "../../context/movieContext/MovieContext"
// import storage from "../../firebase";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


export default function NewProduct() {
  const [file, setfile] = useState([])
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);  //created for firebase

  const{dispatch} = useContext(MovieContext)

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };
  const upload = (items) => {
    items.forEach(item => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);

      uploadTask.on("state_changed", snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is" + progress + "% done");
      },
        (err) => {
          console.log(err)
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url }
            });
            setUploaded((prev) => prev + 1);
          })
        })
    });
  }
  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ])
  };


  const handelFile = (e) => {
    console.log("object")
    console.log(e.target.files[0])
    setfile(p => [...p, e.target.files[0]])
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  }
  console.log(movie);

//uploading files---------------
  const uploadFiles = async() => {
    if (file.length === 0) {
      return;
    }

    const formData = new FormData();

    for (const fileItem of file) {
      formData.append('file', fileItem);
    }

    try {
      const response = await axios.post('http://localhost:5005/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log(response.data.urls);
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  }
  //--
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
        <button className="addProductButton"onClick={uploadFiles}>getLink</button>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" onChange={handelFile} id="img" name="img" />
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input type="file" onChange={handelFile} id="imgTitle" name="imgTitle" />
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input type="file" onChange={handelFile} id="imgTitle" name="imgSm" />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="John Wick" name="title" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="description" name="desc" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="Year" name="year" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre" name="genre" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="Duration" name="duration" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="limit" name="limit" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" onChange={handelFile} name="trailer" />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" onChange={handelFile} name="video" />
        </div>
        {uploaded === 5 ? (

          <button className="addProductButton" onClick={handleSubmit}>Create</button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>Upload</button>
        )}
      </form>
    </div>
  );
  // return <h1>ghgh</h1>
}



// import React from 'react'

// const NewProduct = () => {
//   return (
//     <div>
//       hjhjkjbhkhjkh
//     </div>
//   )
// }

// export default NewProduct
