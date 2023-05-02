import React from 'react';
import Order from "../components/Order";
import Service from "../components/Service";
import Member from "../components/Member";
import Fun from "../components/Fun";
import Footer from "../components/Footer";
const Apps = () => {
  return (
    <div className = "apps"> 
      <Order />
      <Service />
      <Member />
      <Fun />
      <Footer />
    </div>
  )
}

export default Apps