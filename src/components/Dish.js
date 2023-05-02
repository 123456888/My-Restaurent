import React from 'react';
import First from "./First";

const Dish = () => {
    return (
        <div className="dish">
            <First/>
            <div className="dish_one">
                <h>Dishes</h>
            </div>
            <div className="dish_margin">
                <div className="pizza_two">
                    <div className="row">
                        <div className="col-4">
                            <div className="dish_img13">
                                <img src="/image/img13.jpeg" alt=""></img>
                                <h1>Noodles</h1>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dish_img14">
                                <img src="/image/img14.jpg" alt=""></img>
                                <h1>Tomato Noodles</h1>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dish_img15">
                                <img src="/image/img15.jpeg" alt=""></img>
                                <h1>Pasta</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pizza_three">
                    <div className="row">
                        <div className="col-4">
                            <div className="dish_img16">
                                <img src="/image/img16.jpg" alt=""></img>
                                <h1>Noodle manchuriyan</h1>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dish_img17">
                                <img src="/image/img17.jpg" alt=""></img>
                                <h1>Pav Bhaji</h1>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dish_img18">
                                <img src="/image/img18.jpg" alt=""></img>
                                <h1>Samosa</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pizza_four">
                    <div className="row">
                        <div className="col-4">
                            <div className="dish_img19">
                                <img src="/image/img19.jpg" alt=""></img>
                                <h1>Rasgulla</h1>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dish_img20">
                                <img src="/image/img20.jpg" alt=""></img>
                                <h1>Special Pav Bhaji</h1>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dish_img21">
                                <img src="/image/img21.jpg" alt=""></img>
                                <h1>Chole Bature</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dish;