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



            <img src={hero} alt="hero-img" className='hero__img' />


            {/*-------------------------------- Hero heading area------------------- */}

            <div className="hero__heading">
                <Parallax speed={4} >        we are the
                    <br />
                    <span>Artist</span>
                </Parallax>
            </div>


            {/*-------------------------------- Hero Social Links -------------------- */}

            <div className="hero__links">
                <div className="links__btn"><a href='/' ><FaInstagram /></a></div>
                <div className="links__btn"><a href='/' ><FiFacebook /></a></div>
                <div className="links__btn"><a href='/' ><FiTwitter /></a></div>
            </div>

            {/*---------------------------------------------------- */}
        </div>
    )
}
