import React from 'react'
import "../contact/contact.css"
import contact__img from "../assets/contact-img.jpg"
export default function Contact() {
    return (
        <div className='contact__container'>
            <div className="contact__box">
                <div className="contact__left">
                    <img src={contact__img} alt='contact-img' />
                </div>
                <div className="contact__right">
                    <div className="contact__text">
                        <span>Have a question?
                            <br /> Contact us!</span>
                    </div>
                    <form className='contact__form' >

                        <input type="text" name="Name" placeholder='Name' className='input-field' required />

                        <input type="email" name="Email" placeholder='Email' className='input-field' required />
                        <input type="number" name="Mobile" placeholder='Mobile Number' className='input-field' required />

                        <textarea name="Message" placeholder='Type your message here!' className='message' required />
                        <button type="submit" className='contact-button' data-aos="zoom-in"
                            style={{ transition: '0.5s all ease-in-out' }} value="send">Send
                        </button>
                        <div className="contact__links">
                            facebook       twitter          linkedin
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
