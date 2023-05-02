import React from 'react'

const Order = () => {
    return (
        <div className="order">
            <div className="order_one">
                <div className="order_two">
                    <button type="button">Order Online</button>
                </div>
                <h1>Menu</h1>
                <div className="final">
                    <div className="row">
                        <div className="col-4">
                            <div className="row_one">
                                <img src="/image/img2.jpg" alt="img"></img>
                                <h2>Appetizers</h2>
                                <p>Enjoy Our Appetizers our grill where <br></br>the magic happens.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row_two">
                                <img src="/image/img3.jpeg" alt="img"></img>
                                <h2>Gourmet Pizza</h2>
                                <p>All our pizza dogh is made fresh daily.<br></br>We import grain
                                    from the Mediterranean.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row_three">
                                <img src="/image/img4.jpg" alt="img"></img>
                                    <h2>Fresh Salads</h2>
                                    <p>We have the wide variety of salads made <br></br>with the freshes ingredients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order