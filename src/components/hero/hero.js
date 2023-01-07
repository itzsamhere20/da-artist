import React from 'react'
import "../hero/hero.css"
import Parallax from 'react-rellax'
import hero from "../assets/hero.png"
import { FaInstagram } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'

export default function Hero() {
    return (

        <div className='hero__container'>



            {/*-------------------------------- Hero image area -------------------- */}

            <img src={hero} alt="bnw  girl smoking cigrate" className='hero__img' />



            {/*-------------------------------- Hero heading area------------------- */}

            <div className="hero__heading">
                <Parallax
                    class="rellax"
                    data-rellax-speed="7"
                    data-rellax-percentage="0.5"
                    data-rellax-xs-speed="4"
                    data-rellax-mobile-speed="3"
                    data-rellax-tablet-speed="-1"
                    data-rellax-desktop-speed="-3"
                >
                    we are the
                    <br />
                    <span>Artist</span>
                </Parallax>
            </div>


            {/*-------------------------------- Hero Social Links -------------------- */}

            <div className="hero__links">
                <Parallax class="rellax"
                    data-rellax-speed="7"
                    data-rellax-xs-speed="3"
                    data-rellax-mobile-speed="3"
                    data-rellax-tablet-speed="-1"
                    data-rellax-desktop-speed="-3"
                    className="links__btn">

                    <a href='/' >

                        <FaInstagram />

                    </a>

                </Parallax>

                <Parallax class="rellax"
                    data-rellax-speed="7"
                    data-rellax-xs-speed="2"
                    data-rellax-mobile-speed="2"
                    data-rellax-tablet-speed="-1"
                    data-rellax-desktop-speed="-3"
                    className="links__btn" >

                    <a href='/' >

                        <FiFacebook />

                    </a>

                </Parallax>

                <Parallax class="rellax"
                    data-rellax-speed="7"
                    data-rellax-xs-speed="1"
                    data-rellax-mobile-speed="1"
                    data-rellax-tablet-speed="-1"
                    data-rellax-desktop-speed="-3"
                    className="links__btn" >

                    <a href='/' >

                        <FiTwitter />

                    </a>

                </Parallax>

            </div>

            {/*---------------------------------------------------- */}
        </div>
    )
}
