import React from 'react'
import "../about/about.css"
import about from "../assets/about2.png"
export default function About() {
    return (
        <div className='about__container'>


            {/*------------------About img Section -----------------------*/}

            <div className="about__left">
                <img src={about} className="about__img" alt="camera-img" />
            </div>


            {/*------------------About paragraph Section -----------------------*/}

            <div className="about__right">
                <h3>We are a creative film and photo production company based in Pakistan</h3>
                <p>We are a creative film and photo production company hungry for quality in aesthetics. To create modern recognizable stuff we are working with a strong network of experienced professionals. We set up teams to shape your identity, push your idea and manage the workflow from pre- to post-production.</p>
                <button className="about__btn">Hire us Now</button>
            </div>
        </div>
    )
}
