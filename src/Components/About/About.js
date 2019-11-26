import React from 'react'
import './About.css'

class About extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className="About">
            <section className="about-intro"></section>
            <div className="about-steps">
            <section className="about-step1">
                {/* <p className="about-title">Step 1:</p> */}
                
                <div id="step1-img-container"></div>
                <div className="about-text">
                    <h3>Step 1:</h3>
                    Find a product you love! Search through our popular items to find your new favorite sweater, or copy and paste the URL from another website into our search bar. Once you find the perfect piece, you're ready for the next step!
                    </div>
            </section>
            <section className="about-step2">
            <div id="step2-img-container"></div>
            <div className="about-text">
                <h3>Step 2:</h3>
                Once you've selected the ultimate fashion piece, our super smart search engine will return all the latest images of how others have styled your product. You may even find a matching top to go with your new booties along the way! Ready for the final step?
                </div>
                
            </section>
            <section className="about-step3">
                <div id="step3-img-container"></div>
                <div className="about-text">
                    <h3>Step 3:</h3>
                    Congratulations! By now you have found the perfect new addition to your wardrobe, along with plenty of inspiration of how you'll style it! The only thing left to do now is follow the link to purchase! 
                </div>
            </section>
            </div>
            </div>
        )
    };
}
export default About;