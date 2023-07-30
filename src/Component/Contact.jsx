import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ContactSection from './ContactSection'
import ContactForm from './ContactForm'
function Contact() {
  return (
    <div>
    <Navbar />
    <ContactSection  content="Contact Me" subcontent="If You Have Any Quey Contact Me Below"/>
    <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
