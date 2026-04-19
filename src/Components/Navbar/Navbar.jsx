import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="nav">
            <div className="nav-left">
                <img src="/Image/image01.png" alt="logo" />
            </div>
            <div className="nav-mid">
                <ul>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/collection" className="nav-link">Collection</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li> <button><Link to="/Admin" >Admin Panel </Link></button>   </li>
                </ul>
            </div>
            <div className="nav-right">
                <li><Link to="/collection"><img src="/Image/image02.png" alt="Search" /></Link></li>
                <li><Link to="/login"><img src="/Image/image03.png" alt="LogIn" /></Link></li>
                <li><Link to="/cart"><img src="/Image/image04.png" alt="Carts" /></Link></li>
            </div>
        </div>

    )
}