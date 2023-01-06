import React from 'react'
import "../services/services.css"
import service2 from "../assets/videography.png"
import service1 from "../assets/photography2.png"
import service3 from "../assets/drone.png"
import { BsArrowRightShort } from "react-icons/bs"
export default function Services() {
    return (
        <div className='services__container'>

            {/*------------------------------Service Heading ------------------------*/}

            <div className="heading">
                <span>filming services</span>
                <h3>Explore Services</h3>
                <p>
                    Doloremque, ad. Vero veniam dicta aliquid blanditiis ullam quibusdam, accusamus, eius quia molestias nihil temporibus nam praesentium odit repellat.

                </p>
            </div>

            {/*------------------------------Service Section ------------------------*/}

            <div className="service__section">

                {/*------------------------------Service 1 ------------------------*/}
                <div className="services">

                    <div className="service__top">

                        <img src={service1} alt="photo camera " />
                    </div>

                    <div className="service__bottom">

                        <h5>Photography Service</h5>
                        <p>
                            Our Team is specialized in Photography who captures the moments of anxiety, emotion and love you share before the big moment.
                        </p>
                        <button className='service__button' style={{ transition: '0.4s all ease-in-out' }}>
                            <BsArrowRightShort />
                        </button>

                    </div>

                </div>
                {/*------------------------------Service 2 ------------------------*/}

                <div className="services">

                    <div className="service__top">

                        <img src={service2} alt="photo camera " />
                    </div>

                    <div className="service__bottom">

                        <h5>Filming Service</h5>
                        <p>
                            We can film your project whether it is a commercial advertise, a short film or a document film. We have expertise in these fields.

                        </p>
                        <button className='service__button' style={{ transition: '0.4s all ease-in-out' }}>
                            <BsArrowRightShort />
                        </button>

                    </div>

                </div>

                {/*------------------------------Service 3 ------------------------*/}

                <div className="services">

                    <div className="service__top">

                        <img src={service3} alt="photo camera " />
                    </div>

                    <div className="service__bottom">

                        <h5>EQUIPMENT HIRE</h5>
                        <p>
                            Sometimes we don’t use our equipment so you can hire them for your filming. Check our schedule and contact if it suits your time.

                        </p>
                        <button className='service__button' style={{ transition: '0.4s all ease-in-out' }}>
                            <BsArrowRightShort />
                        </button>

                    </div>

                </div>

            </div>


        </div>
    )
}
