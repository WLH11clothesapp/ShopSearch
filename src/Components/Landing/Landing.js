import React from "react";
import LandingProducts from "../LandingProducts/LandingProducts";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing-page">
      <section> Logo + About </section>
      <section>
        <LandingProducts />
      </section>
      <section>
        {" "}
        Graphic that links to Register component, "New? Click here to Register"
      </section>
    </div>
  );
}
