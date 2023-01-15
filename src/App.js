import React from 'react'

import { AboutMe, Contact, Education, MajorProjects, Volunteering, WorkExperience } from './containers';
import { Navbar } from './components'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='header__bg'>
        <Navbar />
      </div>
      <AboutMe />
      <Education />
      <WorkExperience />
      <MajorProjects />
      <Volunteering />
      <Contact />
    </div>
  )
}

export default App