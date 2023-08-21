import { useState } from "react";
import "../components/navbar/navbar.scss"
import { Link } from 'react-router-dom'




const Navbar = () => {
    const[isScrolled, setIsScrolled] = useState(false); //We use this usestate so that whenever we scroll the nav becomes to black color

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    console.log(isScrolled);
    return (
        <>
        
        <div className={isScrolled ? "navone scrolled" : "navone"}>
                <div className="container">
                    <div className="left">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""></img>
                        <span><Link to="/" className="link">Home</Link></span>
                        <span><Link to="/series" className="link">Web Series</Link></span>
                        <span><Link to="/movies" className="link">Movies</Link></span>
                        <span>New and Popular</span>
                        <span>Mylist</span>
                    </div>
                    <div className="right">
                    <span className="search-icon"><i className="fa fa-search" aria-hidden="true"></i></span>
                    <span>Children</span>
                    <span className="search-icon"><i className="fa fa-bell" aria-hidden="true"></i></span>
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""></img>
                    <div className="profile">
                    <span className="search-icon-drop"><i className="fa fa-sort-desc" aria-hidden="true"></i></span>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
