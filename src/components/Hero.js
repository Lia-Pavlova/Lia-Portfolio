import React from 'react'
import Social from './element/Social'

export default function Hero() {
  return (
    <section className="hero-banner" id="hero">
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
                href="../assets/Lia_Pavlova_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                type="file"
                className="btn btn-lg btn-green text-white"
                download="Lia_Pavlova_CV.pdf"
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
