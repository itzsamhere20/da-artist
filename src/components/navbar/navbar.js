import React, { useState } from 'react'
import "../navbar/navbar.css"
import logo from "../assets/logo.png"

import { BsInstagram, BsFacebook, BsYoutube, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"

export default function Navbar() {


    {/*-------------------------------- Mobile View Hooks -------------------- */ }

    const [MobileView, setMobileView] = useState(false);





    return (


        <div className='nav__container' >

            {/*-------------------------------- Nav Logo area -------------------- */}

            <div className="nav__logo" onClick={() => setMobileView(false)}>
                <img src={logo} alt="logo" className='logo' />
            </div>

            {/*-------------------------------- Nav-Links area -------------------- */}

            <div className="nav__links" >
                <ul>
                    <li><a href='/' > About </a> </li>
                    <li><a href='/' > woRk </a> </li>
                    <li><a href='/' > contact </a> </li>
                    <li><a href='/' > Sets </a> </li>
                    <li><a href='/' > faq </a> </li>
                </ul>
            </div>

            {/*-------------------------------- Hamburger area -------------------- */}


            <div className="hamburger" onClick={() => setMobileView(!MobileView)}>

                <RxHamburgerMenu />
            </div>

            {/*--------------------------------Mobile Links area -------------------- */}


            <div className="mobile__links" style={{ marginLeft: MobileView ? '0px' : '-200VW', transition: '1s all ease-in-out' }} onClick={() => setMobileView(false)}>
                <div className="hamburger__close"><RxCross1 onClick={() => setMobileView(true)} /></div>
                <ul >
                    <li><a href='google.com' className='mobile__links__a' > About </a> </li>
                    <li><a href='/' className='mobile__links__a'> woRk </a> </li>
                    <li><a href='/' className='mobile__links__a' > contact </a> </li>
                    <li><a href='/' className='mobile__links__a' > Sets </a> </li>
                    <li><a href='/' className='mobile__links__a' > faq </a> </li>
                </ul>
                <div className="mobile__links__icons">
                    <a href='/' title='Instagram'>  <BsInstagram /> </a >
                    <a href='/' title='Facebook'>  <BsFacebook /></a>
                    <a href='/' title='LinkedIn'>   <BsLinkedin /></a>
                    <a href='/' title='Twitter'>     <BsTwitter /></a>
                    <a href='/' title='Youtube'>   <BsYoutube /> </a>
                    <a href='/' title='Youtube'>   <BsWhatsapp /> </a>

                </div>
            </div>

            {/*---------------------------------------------------- */}
        </div >
    )
}
