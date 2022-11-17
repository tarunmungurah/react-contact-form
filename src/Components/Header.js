import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return  (
    <div>
        <nav>
            <div className="container">
            <Link to='/'>Home</Link> 
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/evenodd'>EvenOdd</Link>
            <Link to='/fetchdata'>FetchData</Link>
            
            </div>
        </nav>
    </div>);
}

export default Header;