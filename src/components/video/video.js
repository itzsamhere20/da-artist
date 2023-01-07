import React from 'react'
import "../video/video.css"
import { BsArrowRightCircleFill } from "react-icons/bs"
import ReactPlayer from 'react-player'
export default function video() {
    return (
        <div className='video__container'>
            <div className="video__left">
                <h3>A selection of some recent awards</h3>
                <p>We live in a time when trends, fashion, and technology are constantly evolving. In the ever-changing hustle & bustle of this age.</p>
                <button className='video__btn'>Learn more <BsArrowRightCircleFill className="video__icon" /> </button>
            </div>

            <div className="video__right">

                <ReactPlayer
                    controls={false}
                    light="https://images.pexels.com/photos/18495/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/"

                    width={'100%'}
                    className="video__player"
                    url='https://www.youtube.com/watch?v=iOxzG3jjFkY' />

            </div>
        </div>

    )
}
