import React from 'react'
import "../footer/footer.css"
import footerimg from "../assets/footer.png"
import logo from "../assets/logo.png"
import { BsInstagram, BsFacebook, BsYoutube, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs"
export default function Footer() {
    return (
        <div className='footer__container'>

            {/*-------------------  Footer Background Image  ---------------- */}

            <img src={footerimg} alt="blocks" className='footer__img' />

            {/*-------------------------------footer Section-----------------------------*/}

            <div className="footer__section">

                {/*-------------------------------logo Section-----------------------------*/}

                <div className="footer__logo__area">

                    <img src={logo} alt="our-logo" className='footer__logo' />

                    {/*------------------------------- social icons Section-----------------------------*/}

                    <div className='footer__social'>
                        <a href='/' title='Instagram'>  <BsInstagram /> </a >
                        <a href='/' title='Facebook'>  <BsFacebook /></a>
                        <a href='/' title='LinkedIn'>   <BsLinkedin /></a>
                        <a href='/' title='Twitter'>     <BsTwitter /></a>
                        <a href='/' title='Youtube'>   <BsYoutube /> </a>

                    </div>


                </div>

                {/*-------------------------------Services Section-----------------------------*/}

                <div className="footer__services__area">

                    <h5 className='footer__links__heading'>
                        our services
                    </h5>
                    <div className='link__line' />

                    <ul className='footer__links__ul'>
                        <a href='#'>
                            <li className='footer__links__li'>
                                Equipment hire
                            </li>
                        </a>
                        <a href='#'>
                            <li className='footer__links__li'>
                                filming services
                            </li>
                        </a>
                        <a href='#'>
                            <li className='footer__links__li'>
                                Photography Services
                            </li>
                        </a>
                        <a href='#'>
                            <li className='footer__links__li'>
                                Dressing
                            </li>
                        </a>
                        <a href='#'>
                            <li className='footer__links__li'>
                                Studio hire
                            </li>
                        </a>
                    </ul>

                </div>

                {/*-------------------------------quick links Section-----------------------------*/}

                <div className="footer__links__area">

                    <h5 className='footer__links__heading'>
                        Quick links
                    </h5>

                    <div className='link__line' />

                    <ul className='footer__links__ul'>
                        <a href='#'>
                            <li className='footer__links__li'>
                                About us
                            </li>
                        </a>
                        <a href='#'>
                            <li className='footer__links__li'>
                                contact us
                            </li>
                        </a>
                        <a href='#'>
                            <li className='footer__links__li'>
                                Portfolio
                            </li>
                        </a>
                        <a href='#'>
                            <li className='footer__links__li'>
                                packages
                            </li>
                        </a>
                    </ul>

                </div>

                {/*-------------------------------Connect with us Section-----------------------------*/}

                <div className="footer__address">

                    <h5 className='footer__links__heading'>
                        Connect with us
                    </h5>
                    <div className='link__line' />

                    <div>
                        <div className='contact'>
                            <div className="contact">
                                A: 14 L.E Goulburn St, Berlin 2000Wm

                            </div >

                            <div className="contact">
                                P: (+88) 1990 6886
                            </div>

                            <div className='contact'>
                                E: hello@daartist.com
                            </div>
                        </div>

                    </div>
                    <div className='footer__social__bottom'>
                        <a href='/' title='Instagram'>  <BsInstagram /> </a >
                        <a href='/' title='Facebook'>  <BsFacebook /></a>
                        <a href='/' title='LinkedIn'>   <BsLinkedin /></a>
                        <a href='/' title='Twitter'>     <BsTwitter /></a>
                        <a href='/' title='Youtube'>   <BsYoutube /> </a>
                        <a href='/' title='WhatsApp'>   <BsWhatsapp /> </a>
                    </div>

                </div>

                {/*-------------------------------Copyright Section-----------------------------*/}
                <div className="line" />
                <div className="copyright">
                    Copyright © 2022 DaArtist <span>- All Rights Reserved.</span>
                </div>

                {/*-------------------------------Section End-----------------------------*/}

            </div>

        </div>
    )

}

