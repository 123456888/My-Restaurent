import React from 'react';
import First from "./First";

const Pizza = () => {
  return (
    <div className="pizza">
      <First />
      <div className="poizza_one">
        <h>Pizzas</h>
      </div>
      <div className="pizza_margin">
        <div className="pizza_two">
          <div className="row">
            <div className="col-4">
              <div className="pizza_img5">
                <img src="/image/img5.jpg" alt=""></img>
                <h1>Cheese Pizza</h1>
              </div>
            </div>
            <div className="col-4">
              <div className="pizza_img6">
                <img src="/image/img6.jpg" alt=""></img>
                <h1>Chicken Pizza</h1>
              </div>
            </div>
            <div className="col-4">
              <div className="pizza_img7">
                <img src="/image/img7.jpg" alt=""></img>
                <h1>Butter Pizza</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="pizza_three">
          <div className="row">
            <div className="col-4">
              <div className="pizza_img8">
                <img src="/image/img8.png" alt=""></img>
                <h1>Corn Pizza</h1>
              </div>
            </div>
            <div className="col-4">
              <div className="pizza_img9">
                <img src="/image/img9.jpg" alt=""></img>
                <h1>Veg Pizza</h1>
              </div>
            </div>
            <div className="col-4">
              <div className="pizza_img10">
                <img src="/image/img10.jpg" alt=""></img>
                <h1>Broccoli Pizza</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="pizza_four">
          <div className="row">
            <div className="col-4">
              <div className="pizza_img11">
                <img src="/image/img11.jpg" alt=""></img>
                <h1>Meat Pizza</h1>
              </div>
            </div>
            <div className="col-4">
              <div className="pizza_img12">
                <img src="/image/img12.jpg" alt=""></img>
                <h1>Tomato Pizza</h1>
              </div>
            </div>
            <div className="col-4">
              <div className="pizza_img13">
                <img src="/image/img5.jpg" alt=""></img>
                <h1>Pepperoni Pizza</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pizza