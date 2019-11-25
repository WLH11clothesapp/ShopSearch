import React from "react";
import LandingProducts from "../LandingProducts/LandingProducts";
import "./Landing.css";
import {Link} from 'react-router-dom'


export default function Landing() {
  return (
    <div className="landing-page">
      
      <section className="landing-content-about">

      </section>
      <section className="popular-products">
        Explore our Popular Products
        <div className="random-products-container">
          <LandingProducts />
        </div>
      </section>
      <Link to='/register'>
        <section className="landing-content-register">
      </section></Link>
    </div>
  );
}
