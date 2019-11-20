import React from 'react'
import './Landing.css'

export default function Landing(){
    return(
        <div className="landing-page">
            <nav className="placeholder">When our nav component is wireframed, we can add it here. This nav is a placeholder for now</nav>
            <section className="landing-content-about"> Graphic with some "about our app" information, and our app's logo  </section>
            <section className="popular-products">
                Explore our Popular Products
            <div className="random-products-container"> 
            <div className="random-product"></div>
            <div className="random-product"></div>
            <div className="random-product"></div>
            <div className="random-product"></div>
            </div>
            </section>
            <section className="landing-content-register"> Graphic that links to Register component, "Ready to get started? Click here to Register"</section>
        </div>
    )
}
