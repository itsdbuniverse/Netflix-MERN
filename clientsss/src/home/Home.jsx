import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Featured from "../components/featured/Featured"
import List from "../components/list/List"
import "./home.scss"
import {BaseUrl} from "../../config"
import axios from "axios"

// const Home = ({ type , user }) => {
//   const [lists,setLists] = useState([]); //when we refresh or enter the app we gonna fetch those list
//   const [genre,setGenre] = useState(null); //making this for genre

//   useEffect(()=>{
//     const getRandomLists = async ()=>{
//       try{
//         const res = await axios.get(BaseUrl+
//           `lists${type ? "?type=" + type : ""}${
//             genre ? "&genre=" + genre : ""}`,
//           {
//             headers : {
//               token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGJlZTlkMjkzZGZmZTc2NjFmMDk2ZTAiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTA1MzgwMjIsImV4cCI6MTY5MDk3MDAyMn0.BE9MODU-jmsTXDhn52wG8fK_peZ4mElcU4vDVrSx1Qg",
//             },
//           }
//         ); //calling list from list api,We goona use list url and if we have type series or movies as we have done in api and if we have genre
//         // console.log(res.data);
//         setLists(res.data);
//         console.log("setLists------------->>>>>>>" ,res.data)
//       }catch(err){
//         console.log(err);
//       }
//     };
//     getRandomLists();
//   },[type,genre]); //function and dependency of useEffect

//   return (
//     <div className="home">
//       <Navbar />
//       <Featured type={type} /> //type props in featured so that we can call it as type
//       {lists.map(list=>(
//         <List list={list}/>
//       ))}
//     </div>
//   )
// }

// export default Home

// -------------

const Home = ({ type , user }) => {
  const [lists,setLists] = useState([]); //when we refresh or enter the app we gonna fetch those list
  const [genre,setGenre] = useState(null); //making this for genre

  useEffect(()=>{
    const getRandomLists = async ()=>{
      try{
        const res = await axios.get(BaseUrl+
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""}`,
          {
            headers : {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQzM2E3YzZmZGYzNzk0NjRhOGI5ZjQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTIwNDI4NTgsImV4cCI6MTY5NDYzNDg1OH0.ouut2iqz__G-iijmx6CKvFtnEFMREdkjrLC9weGcaFU",
            },
          }
        ); //calling list from list api,We goona use list url and if we have type series or movies as we have done in api and if we have genre
        // console.log(res.data);
        setLists(res.data);
        console.log("setLists------------->>>>>>>" ,res.data)
      }catch(err){
        console.log(err);
      }
    };
    getRandomLists();
  },[type,genre]);



  return (
    <div className="home">
      <Navbar />
      <Featured />
      {lists.map((list) => (
        <List list={list}/>
      ))}
      
      
    </div>
  )
}

export default Home
