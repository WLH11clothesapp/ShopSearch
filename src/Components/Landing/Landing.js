import React from "react";
import LandingProducts from "../LandingProducts/LandingProducts";
import "./Landing.css";


export default function Landing() {
  return (
    <div className="landing-page">
      
      <section className="landing-content-about">
        {" "}
        Graphic with some "about our app" information, and our app's logo{" "}
      </section>
      <section className="popular-products">
        Explore our Popular Products
        <div className="random-products-container">
          <LandingProducts />
        </div>
      </section>
      <section className="landing-content-register">
        {" "}
        Graphic that links to Register component, "Ready to get started? Click
        here to Register"
      </section>
    </div>
  );
}
