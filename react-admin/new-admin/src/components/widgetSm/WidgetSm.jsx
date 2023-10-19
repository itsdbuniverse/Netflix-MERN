import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import {BaseUrl} from '../../../config'

export default function WidgetSm() {

  const [newUsers,setNewUsers] = useState([])   //coming from api users userstats limit = 5

  useEffect(()=>{
    const getNewUsers = async()=>{
      try{
      const res = await axios.get(BaseUrl+"/users?new=true",{
        headers: {
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQzM2E3YzZmZGYzNzk0NjRhOGI5ZjQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTE1NzYzOTcsImV4cCI6MTY5MjAwODM5N30.l5uzFGaYC9UhrJnN92pQBCrs1G6BZaRRWfA4O2gtvxs"
        },
      });
      setNewUsers(res.data)
      }catch(err){
        console.log(err);
      }
    };
    getNewUsers();
    }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user=>(
        <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://i.pinimg.com/550x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
