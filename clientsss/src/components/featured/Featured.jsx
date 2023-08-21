
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useState, useEffect } from 'react';
import axios from "axios";
import { BaseUrl } from "../../../config"
import "../featured/featured.scss";

export default function Featured({ type }) {
    const [content, setContent] = useState({});  //use this to pass any type or random content movies to display



    useEffect(() => {
        const getRandomContent = async () => {
            try {
                console.log("inside ")
                const res = await axios.get(BaseUrl + `movies/random?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQzM2E3YzZmZGYzNzk0NjRhOGI5ZjQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTIxOTA4NDh9.a-4w___qIfr8p5pq6TKvCtrtOfEMg9Z3HWnyzf7D98Y",
                    },
                });
                setContent(res.data[0]);
            } catch (err) {
                console.log(err)
            }
        };
        getRandomContent();
    }, [type]);

    console.log(content);
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical">Historical</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Romance">Romance</option>
                        <option value="Horror">Horror</option>
                        <option value="Animation">Animation</option>
                        <option value="Documentry">Documentry</option>

                    </select>
                </div>
            )}
            <img src={content.img} alt="" />
            <div className="info">
                <img src={content.imgTitle} alt="" />
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className='play'>
                        <span className='play-icon'><i className="fa fa-play" aria-hidden="true"></i></span>
                        <span>Play</span>
                    </button>
                    {/* <button className='more'>
                    <span className='more-icon'><i className="fa fa-info-circle" aria-hidden="true"></i></span>
                    <span>Info</span>
                </button> */}
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
