import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../gallery/gallery.css"

// import required modules
import gallerybg from "../assets/gallery-bg.jpg"
import gallery1 from "../assets/gallery-1.jpg"

import gallery2 from "../assets/gallery-2.jpg"
import gallery3 from "../assets/gallery-3.jpg"
import gallery4 from "../assets/gallery-4.jpg"
import gallery5 from "../assets/gallery-5.jpg"
import gallery6 from "../assets/gallery-6.jpg"
import gallery7 from "../assets/gallery-7.jpg"
import gallery8 from "../assets/gallery-8.jpg"
import gallery9 from "../assets/gallery-9.jpg"
import gallery10 from "../assets/gallery-10.jpg"
import gallery11 from "../assets/gallery-11.jpg"
import gallery12 from "../assets/gallery-12.jpg"


export default function App() {
    SwiperCore.use([Keyboard, Mousewheel]);

    return (
        <div className="gallery__container">

            <div className="heading">
                <span>our photos</span>
                <h3>Photo Gallery</h3>
                <p>
                    Doloremque, ad. Vero veniam dicta aliquid blanditiis ullam quibusdam, accusamus, eius quia molestias nihil temporibus nam praesentium odit repellat.

                </p>
            </div>

            <Swiper

                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={700}
                parallax={true}
                breakpoints={{
                    // when window width is >= 320px
                    320: {

                        navigation: 'true',
                        direction: 'vertical'
                    },
                    // when window width is >= 480px
                    480: {
                        navigation: false

                    },
                    // when window width is >= 640px
                    640: {


                    }
                }}
                autoplay={{
                    delay: 2000,

                }}
                navigation={false}
                mousewheel={true}

                direction="vertical"
                pagination={false}
                /*  pagination={{
                      
                      clickable: true,
  
  
                  }}*/


                modules={[Parallax, Navigation, Autoplay]}
                className="mySwiper"
            >

                <div
                    slot="container-start"
                    className="gallery__bg"

                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide><img src={gallery1} alt=' ' /></SwiperSlide>
                <SwiperSlide><img src={gallery2} alt=' ' /></SwiperSlide>
                <SwiperSlide><img src={gallery3} alt=' ' /></SwiperSlide>
                <SwiperSlide><img src={gallery4} alt=' ' /></SwiperSlide>
                <SwiperSlide><img src={gallery5} alt=' ' /></SwiperSlide>
                <SwiperSlide><img src={gallery6} alt=' ' /></SwiperSlide>
                <SwiperSlide><img src={gallery7} alt=' ' /></SwiperSlide>
                <SwiperSlide><img src={gallery8} alt=' ' /></SwiperSlide>
                <SwiperSlide><img src={gallery9} alt=' ' /></SwiperSlide>
                <SwiperSlide><img src={gallery10} alt=' ' /></SwiperSlide>
                <SwiperSlide><img src={gallery11} alt=' ' /></SwiperSlide>
                <SwiperSlide><img src={gallery12} alt=' ' /></SwiperSlide>

            </Swiper>
        </div >
    );
}