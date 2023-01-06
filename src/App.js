import React from "react"
import flower from "./components/assets/flower.png"
import "./App.css"

import ProgressBar from 'react-progressbar-on-scroll'
import Navbar from "./components/navbar/navbar"
import Hero from "./components/hero/hero"
import About from "./components/about/about"
import Video from "./components/video/video"
import Films from "./components/films/films"
import ImagGallery from "./components/gallery/gallery"
import Services from "./components/services/services"
import Testimonials from "./components/testimonials/testimonials"
import Footer from "./components/footer/footer"



export default function App() {
  return (
    <>
      <div className="main-container">
        <ProgressBar
          color="white"
          height={5}
          direction="right"
          position="right"
          gradient={true}
          gradientColor="grey"
        />
        <Navbar />
        <Hero />
        <About />
        <Video />
        <Films />
        <ImagGallery />
        <Services />
        <Testimonials />
        <Footer />
      </div>

    </>
  )
}

