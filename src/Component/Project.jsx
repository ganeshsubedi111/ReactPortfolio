import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ProjectSection from './ProjectSection'
import Work from './Work'

function Project() {
  return (
    <div>
    <Navbar />
    <ProjectSection title="PROJECTS" subtitle="Here are a few of the projects I have accomplished."/>
    <Work />
      <Footer />
    </div>
  )
}

export default Project
