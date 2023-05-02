import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Gallery = () => {
  return (
    <div className="gallery">
      <Navbar/>
      <div className="gallery_design">
        <h>Gallery</h>
      </div>
      <div className="gallery_two">
        <Link to = "/Pizza"><button>Pizzas</button><br></br><br></br></Link>
        <Link to = "/Dish"><button className = "gallery_btn">Dishes</button><br></br><br></br></Link>
        <Link to = "/Salad"><button>Salads</button></Link>
      </div>
    </div>
  )
}

export default Gallery;