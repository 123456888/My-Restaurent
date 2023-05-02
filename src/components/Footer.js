import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_one">
                <h1>GET IN TOUCH</h1>
            </div>
            <div className="final_design">
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-6">
                                <div className="footer_two1">
                                    <img src="/image/service_icon4.png" alt=""></img>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="footer_two1">
                                    <h2>269 Lark St, Albany, NY 12210</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-6">
                                <div className="footer_two2">
                                    <img src="/image/service_icon5.png" alt=""></img>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="footer_two2">
                                    <h2>(518) 449 11 11</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-6">
                                <div className="footer_two3">
                                    <img src="/image/service_icon6.png" alt=""></img>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="footer_two3">
                                    <h2>info@sohopizza.com</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="final_one">
                <h3>HOURS OF OPERATION</h3>
                <h4>Monday To Friday: 2:00PM - 3:00AM</h4>
                <h5>Saturday and Sunday: 11:00AM - 3:00AM</h5>
            </div>
            <div className = "final_two">
                <h6>© 2017 Soho Pizza. All Rights Reserved.</h6>
                <h7>Designed by Subham Raj</h7>
            </div>
        </div>
    )
}

export default Footer