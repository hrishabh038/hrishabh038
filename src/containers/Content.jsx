import React from 'react'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Skills from '../components/Skills'

const Content = () => {
  return (
    <div className='flex flex-col gap-14 pr-4 pl-4 lg:pl-[375px] pt-[65px] pb-4 w-full '>
        <About />
        <WorkExperience />
        <Skills />
        <Education />
        <Projects />
        <Footer />
    </div>
  )
}

export default Content