import React, { useState, useEffect } from 'react'
import "../listitem/listitem.scss"
import { Add, PlayArrowRounded, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons'
import axios from 'axios';
import { BaseUrl } from '../../../config';
import { BrowserRouter as Router, Route, Routes , Navigate} from "react-router-dom";
import { Link } from 'react-router-dom';

// export default function ListItem({ index, item }) {
//   const [isHovered, setIsHovered] = useState(false); //we use this state to hover and make the image size bigger
//   const [movie, setMovie] = useState({});
  
  

//   useEffect(()=>{
//     const getMovie = async ()=>{
//       try{
//         const res = await axios.get("http://localhost:5700/api/movies/find/"+item, {
//             headers : {
//               token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGJlZTlkMjkzZGZmZTc2NjFmMDk2ZTAiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTA1MzgwMjIsImV4cCI6MTY5MDk3MDAyMn0.BE9MODU-jmsTXDhn52wG8fK_peZ4mElcU4vDVrSx1Qg",
//         },
//       });
//       console.log(res.data)
//       setMovie(res.data);

//       }catch(err){
//         console.log(err);
//       }
//     };
//   getMovie()

//   },[item]);

//   return (
//     <div className="listItem"
//       style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}>
//       <img src={movie?.img} />
//       {isHovered && (
//         <>
//           <video src={movie?.trailer} autoPlay={true} loop />
//           <div className="itemInfo">
//             <div className="icons">
//               <PlayArrowRounded className='icon'/>
//               <Add className='icon'/>
//               <ThumbUpOutlined className='icon'/>
//               <ThumbDownOutlined className='icon'/>
//             </div>
//             <div className="itemInfoTop">
//               <span>1{movie?.duration}</span>
//               <span className="limit">+{movie?.limit}</span>
//               <span>{movie?.year}</span>
//             </div>
//             <div className="desc">
//               {movie?.desc}
//             </div>
//             <div className="genre">{movie?.genre}</div>
//           </div>
//         </>
//       )}
//     </div>
//   )
// }


// -----------------



export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false); //we use this state to hover and make the image size bigger
  const [movie, setMovie] = useState({});
  useEffect(()=>{
    const getMovie = async ()=>{
      try{
        const res = await axios.get(BaseUrl + "movies/find/"+item,{
          headers : {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQzM2E3YzZmZGYzNzk0NjRhOGI5ZjQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTIxOTA4NDh9.a-4w___qIfr8p5pq6TKvCtrtOfEMg9Z3HWnyzf7D98Y",
          },
        });
        console.log("res.data" , res.data)
        setMovie(res.data);

      }catch(err){
        console.log("Errrrrrrrrrror", err)
      }
    };
    getMovie()
  },[item]);

  return (
    <Link to= {{ pathname: "/watch", state:{msg : "Hello" , ...movie}}}>
    <div className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src= {movie && movie?.img} alt = ""/>
      {isHovered && (
        <>
          <video src={movie?.trailer || ""} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowRounded className='icon'/>
              <Add className='icon'/>
              <ThumbUpOutlined className='icon'/>
              <ThumbDownOutlined className='icon'/>
            </div>
            <div className="itemInfoTop">
              <span>{movie?.duration}</span>
              <span className="limit">+{movie?.limit}</span>
              <span>{movie?.year}</span>
            </div>
            <div className="desc">{movie?.desc}</div>
            <div className="genre">{movie?.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  )
}
