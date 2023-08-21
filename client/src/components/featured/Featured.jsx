import React from 'react'
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "../featured/featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
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
        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <div className="info">
            <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Qui accusamus labore recusandae nisi, ullam molestiae reprehenderit
                quam pariatur minima facere nobis laudantium ducimus. Eligendi, ab qui
                excepturi dicta eius, nobis ipsum voluptatibus maxime iste, distinctio sunt.
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
