import React, { useState, useEffect } from 'react'
import profile from '../assets/image/lia.jpg'
import about from '../data/about.json'

export default function About() {
  const [info, setInfo] = useState([])
  const [count, setCount] = useState([])

  useEffect(() => {
    const info = about.profile
    const count = about.count
    setInfo(info)
    setCount(count)
  }, [info, count])

  return (
    <section className="about-section section" id="about">
      <div className="container">
        {info.map((infoData) => {
          return (
            <div className="row align-items-center ">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="about-text section-title-text go-to">
                  <h1 className="dark-color">{infoData.aboutTitle}</h1>
                  <h6 className="lead text-white">{infoData.aboutSubTitle}</h6>
                  <p>
                    I <mark>design and develop</mark>{' '}
                    {infoData.aboutDescription}
                  </p>
                  <div className="row about-list"></div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="about-avatar">
                  <img src={profile} title="Lia avatar" alt="" />
                  <div className="img-overlay"></div>
                </div>
              </div>
            </div>
          )
        })}

        <div className="counter">
          <div className="row">
            {count.map((counter) => {
              return (
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h5" data-to="500" data-speed="500">
                      {counter.count}
                    </h6>
                    <p className="m-0px font-w-400">{counter.Title}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
