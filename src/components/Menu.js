import React from 'react';
import Second from "./Second";

const Menu = () => {
  return (
    <div className = "menu">
        <Second/>
        <h>Prize</h>
        <div className = "menu_design">
            <img src = "/image/img31.jpg" alt = "" className = "img1"></img>
            <img src = "/image/img32.png" alt = "" className = "img2"></img>
            <img src = "/image/img33.png" alt = "" className = "img3"></img>
        </div>
    </div>
  )
}

export default Menu;