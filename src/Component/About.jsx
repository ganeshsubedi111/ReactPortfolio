import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutSection from './AboutSection'
import AboutContent from './AboutContent'
function About() {
  return (
    <div>
    <Navbar />
     <AboutSection  heading="About Me" subheading="I am a Bsccsit Student With Kneen Interested in Frontend Development"/>
     <AboutContent />
      <Footer />
    </div>
  )
}

export default About
