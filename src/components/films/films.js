import React from 'react'
import "../films/films.css"
import film1 from "../assets/film-1.jpg"
import film2 from "../assets/film-2.jpg"
import film3 from "../assets/film-3.jpg"
import film4 from "../assets/film-4.jpg"
import film5 from "../assets/film-5.jpg"
import film6 from "../assets/film-6.jpg"
import film7 from "../assets/film-7.jpg"

export default function Films() {
    return (
        <div className='films__container'>

            <div className="heading">
                <span>my best films</span>
                <h3>featured films</h3>
                <p>
                    Doloremque, ad. Vero veniam dicta aliquid blanditiis ullam quibusdam, accusamus, eius quia molestias nihil temporibus nam praesentium odit repellat.

                </p>
            </div>

            <div className="image-gallery">


                <div className="column">
                    <div className="image-item">
                        <img src={film1} alt="" />
                        <div className="overlay"><span>This last LAugh</span>
                            <button className='overlay__btn' style={{ transition: ' 2s all ease-in-out' }}>View More</button>
                        </div>
                    </div>
                    <div className="image-item">
                        <img src={film2} alt="" />
                        <div className="overlay"><span>The Secret Scripture</span>
                            <button className='overlay__btn' style={{ transition: '2s all ease-in-out' }}>View More</button>
                        </div>
                    </div>

                </div>


                <div className="column">
                    <div className="image-item">
                        <img src={film3} alt="" />
                        <div className="overlay"><span>Kicks</span>
                            <button className='overlay__btn' style={{ transition: '2s all ease-in-out' }}>View More</button>
                        </div>
                    </div>
                    <div className="image-item">
                        <img src={film4} alt="" />
                        <div className="overlay"><span>The Duke of Burgundy
                        </span>
                            <button className='overlay__btn' style={{ transition: ' 2s all ease-in-out' }}>View More</button>
                        </div>
                    </div>
                </div>


                <div className="column">
                    <div className="image-item">
                        <img src={film5} alt="" />
                        <div className="overlay"><span>Raising Bertie Up</span>
                            <button className='overlay__btn' style={{ transition: ' 2s all ease-in-out' }}>View More</button>
                        </div>
                    </div>
                    <div className="image-item">
                        <img src={film6} alt="" />
                        <div className="overlay"><span>Alaska is a Drag</span>
                            <button className='overlay__btn' style={{ transition: ' 2s all ease-in-out' }}>View More</button>
                        </div>
                    </div>
                    <div className="image-item">
                        <img src={film7} alt="" />
                        <div className="overlay"><span>final night’s</span>
                            <button className='overlay__btn' style={{ transition: ' 2s all ease-in-out' }}>View More</button>
                        </div>
                    </div>


                </div>
            </div>
            <div className="hire">
                <p>
                    We are a creative film & photo production company
                </p>
                <div className="hire__btn">
                    <button>learn more</button>
                    <button>hire us</button>
                </div>
            </div>

        </div >
    )
}
