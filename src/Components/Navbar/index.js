import React from 'react';
import {Link } from "react-router-dom";
import  "./styles.css"
 function index() {
    return (
        <div className="nav-container">
        <ul className="nav-list">
        <Link to="/"><li>Home</li></Link>
        <Link to="/products"><li>Products</li></Link>
        <Link to="/signIn"><li>SignIn</li></Link>
         </ul>  
            
        </div>
    )
}

export default index
