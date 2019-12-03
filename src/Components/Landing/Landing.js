import React from "react";
import LandingProducts from "../LandingProducts/LandingProducts";
import "./Landing.css";
import {Link} from 'react-router-dom'


export default function Landing() {
  return (
    <div className="landing-page">
      
      <section className="landing-content-about">
      <p id="landing-title">Search. Discover. Slay.</p>
      </section>
      <section className="popular-products">
        <p id="landing-explore-title"> Explore Popular Items</p>
        <div className="random-products-container">
          <LandingProducts />
        </div>
      </section>
      
        <section className="landing-content-register">
          <p id="landing-register-info">
          Ready to Get Started?
        
          <br/>
          <Link id="register-link" to='/register'>Create New Account</Link>
          </p>
          
      </section>
    </div>
  );
}
