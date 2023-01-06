import React from 'react'
import "../testimonials/testimonials.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import testimonial1 from "../assets/testimonial-1.jpg"
import testimonial2 from "../assets/testimonial-2.jpg"
import testimonial3 from "../assets/testimonial-3.jpg"
import testimonial4 from "../assets/testimonial-4.jpg"
import testimonial5 from "../assets/testimonial-5.jpg"

export default function Testimonials() {
    return (
        <div className='testimonials__container'>
            <Swiper

                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "black",
                    width: '90%',
                    marginBottom: '5%'
                }}

                autoplay={{
                    delay: 2000,

                }}
                navigation={false}
                mousewheel={false}

                pagination={{

                    clickable: true,


                }}


                modules={[Pagination, Navigation, Autoplay]}
                className="testimonial__Swiper"
            >

                <SwiperSlide>
                    <div className="testimonial__slide">
                        <img src={testimonial1} alt=' ' />
                        <div className="testimonial__heading">
                            <h5>the best film studio</h5>
                            <p> They all are witnesses. If you or your organization have a story to tell, an idea to share or word to spread, Da Artist
                                can help you bring it to life. They can assist with narrative exploration, director contacts and production strategies.
                            </p>
                            <div className="testimonial__name">
                                jerry hansen <span>/ Actor</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial__slide">
                        <img src={testimonial2} alt=' ' />
                        <div className="testimonial__heading">
                            <h5>the best film studio</h5>
                            <p> They all are witnesses. If you or your organization have a story to tell, an idea to share or word to spread, Da Artist
                                can help you bring it to life. They can assist with narrative exploration, director contacts and production strategies.
                            </p>
                            <div className="testimonial__name">
                                jerry hansen <span>/ Actor</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial__slide">
                        <img src={testimonial3} alt=' ' />
                        <div className="testimonial__heading">
                            <h5>the best film studio</h5>
                            <p> They all are witnesses. If you or your organization have a story to tell, an idea to share or word to spread, Da Artist
                                can help you bring it to life. They can assist with narrative exploration, director contacts and production strategies.
                            </p>
                            <div className="testimonial__name">
                                jerry hansen <span>/ Actor</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial__slide">
                        <img src={testimonial4} alt=' ' />
                        <div className="testimonial__heading">
                            <h5>the best film studio</h5>
                            <p> They all are witnesses. If you or your organization have a story to tell, an idea to share or word to spread, Da Artist
                                can help you bring it to life. They can assist with narrative exploration, director contacts and production strategies.
                            </p>
                            <div className="testimonial__name">
                                jerry hansen <span>/ Actor</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial__slide">
                        <img src={testimonial5} alt=' ' />
                        <div className="testimonial__heading">
                            <h5>the best film studio</h5>
                            <p> They all are witnesses. If you or your organization have a story to tell, an idea to share or word to spread, Da Artist
                                can help you bring it to life. They can assist with narrative exploration, director contacts and production strategies.
                            </p>
                            <div className="testimonial__name">
                                jerry hansen <span>/ Actor</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>



        </div>
    )
}
