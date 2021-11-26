import React from 'react'
import Social from './element/Social'
import resume_file from '../assets/CV_Natalia_Pavlova.pdf'

export default function Hero() {
  return (
    <section className="hero-banner" id="home">
      <div className="container">
        <div className="hero-body">
          <div className="social title float-left">
            <Social></Social>
            <p>Follow me</p>
          </div>

          <div className="intro-content ml-5">
            <div className="welcome-title">
              <p>Hello! I'm</p>
              <h1>
                Lia <span className="bold-color">Pavlova</span>{' '}
              </h1>
            </div>
            <div className="designation-list">
              <ul>
                <li>
                  I'm currently working on becoming a Full Stack Web Developer
                </li>
              </ul>
            </div>
            <div className="resume">
              <a
                href={resume_file}
                target="_blank"
                rel="noopener noreferrer"
                type="file"
                className="btn btn-lg btn-green text-white"
                download="Natalia_Pavlova_CV.pdf"
              >
                Get Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
