import React from 'react';
import First from "./First";

const Salad = () => {
    return (
        <div className="salad">
            <First/>
            <div className="salad_head">
                <h>Salads</h>
            </div>
            <div className="salad_one">
                <div className="row">
                    <div className="col-4">
                        <div className="salad_two">
                            <img src="/image/img22.jpg" alt=""></img>
                            <h1>Simple Salad</h1>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="salad_two">
                            <img src="/image/img23.jpg" alt=""></img>
                            <h1>Salad With Onion</h1>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="salad_two">
                            <img src="/image/img24.jpg" alt=""></img>
                            <h1>Lite Salad</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="salad_two">
                <div className="row">
                    <div className="col-4">
                        <div className="salad_two">
                            <img src="/image/img25.jpg" alt=""></img>
                            <h1>Butter Salad</h1>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="salad_two">
                            <img src="/image/img26.jpg" alt=""></img>
                            <h1>Tomato Salad</h1>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="salad_two">
                            <img src="/image/img27.png" alt=""></img>
                            <h1>Salad With Lemon</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="salad_three">
                <div className="row">
                    <div className="col-4">
                        <div className="salad_two">
                            <img src="/image/img28.jpg" alt=""></img>
                            <h1>Extra Butter Salad</h1>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="salad_two">
                            <img src="/image/img29.jpg" alt=""></img>
                            <h1>Chees Salad</h1>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="salad_two">
                            <img src="/image/img30.jpg" alt=""></img>
                            <h1>Fried Salad</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Salad;