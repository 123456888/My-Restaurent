import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_two">
        <img src="/image/logo1.png" alt=""></img>
      </div>
      <div className="navbar_menu">
        <div className="menu_two">
          <ul>
            <Link to="/Gallery" style={{textDecoration:"none"}}><li className="gallery_one">Gallery</li></Link>
            <Link to = "/Second" style={{textDecoration:"none"}}><li className = "gallery_one">Menu</li></Link>
            <Link to = "/Contact" style={{textDecoration:"none"}}><li className = "gallery_one">Contact</li></Link>
            <li className="order_list" style={{textDecoration:"none"}}>Order List</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;