import React from 'react'

const Service = () => {
    return (
        <div className="service">
            <div className="service_one">
                <h1>Our Services</h1>
            </div>
            <div className="row-icon">
                <div className="row">
                    <div className="col-4">
                        <div className="service_row1">
                            <img src="/image/service_icon1.png" alt=""></img>
                            <h1>Happy People</h1>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service_row2">
                            <img src="/image/service_icon2.png" alt=""></img>
                            <h2>Creative Culinary</h2>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service_row3">
                            <img src="/image/service_icon3.png" alt=""></img>
                            <h3>Food Delivery</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service