import React from 'react';
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar/>
      <div className="contact_one">
        <h>Contact</h>
      </div>
      <div className="contact_us">
        <h>Contact Information</h>
      </div>
      <div className="display_one">
        <div className="display_two">
          <div className="row">
            <div className="col-4">
              <div className="contact_col">
                <div className="row">
                  <div className="col-6">
                    <img src="/image/service_icon7.png" alt=""></img>
                  </div>
                  <div className="contact_head1">
                    <h3>269 Lark St, Albany,<br></br>NY 12210</h3>
                  </div>
                </div>
              </div>
              <div className="contact_col1">
                <div className="row">
                  <div className="col-6">
                    <img src="/image/service_icon8.png" alt=""></img>
                  </div>
                  <div className="contact_head2">
                    <h4>(518)4491111</h4>
                  </div>
                </div>
              </div>
              <div className="contact_col2">
                <div className="row">
                  <div className="col-6">
                    <img src="/image/service_icon9.png" alt=""></img>
                  </div>
                  <div className="contact_head3">
                    <h5>info@sohopizza.com</h5>
                  </div>
                </div>
              </div>
              <div className="contact_col3">
                <div className="row">
                  <div className="col-6">
                    <img src="/image/service_icon10.png" alt=""></img>
                  </div>
                  <div className="contact_head4">
                    <h6>Soho Pizz4</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;