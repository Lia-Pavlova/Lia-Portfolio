import React from 'react'
import Header from '../components/element/Header.js'
import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education.js'
import Skill from '../components/Skill.js'
import PortfolioWork from '../components/PortfolioWork.js'
// import Contact from '../components/Contact.js'
import Footer from '../components/element/Footer.js'

export default function Home() {
  return (
    <div className="content">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Education></Education>
      <Skill></Skill>
      <PortfolioWork></PortfolioWork>
      {/* <Contact></Contact> */}
      <Footer></Footer>
    </div>
  )
}
