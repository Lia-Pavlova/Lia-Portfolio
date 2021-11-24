import React, { useState, useEffect } from 'react'
import profile from '../assets/image/programmer.jpg'
import about from '../data/about.json'

export default function About() {
  const [profileImg, setProfileImg] = useState([])
  const [info, setInfo] = useState([])

  useEffect(() => {
    const profileImg = about.profile
    const info = about.info
    setProfileImg(profileImg)
    setInfo(info)
  }, [profileImg, info])

  return (
    <section className="about-section section" id="about">
      <div className="container">
        {profileImg.map((profileData) => {
          return (
            <div className="row align-items-center ">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="about-text section-title-text go-to">
                  <h1 className="dark-color">{profileData.aboutTitle}</h1>
                  <h6 className="lead text-white">
                    {profileData.aboutSubTitle}
                  </h6>
                  <p>
                    I'm <mark>specializing</mark> {profileData.aboutDescription}
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

        <div className="info-profile">
          <div className="row">
            {info.map((infoData) => {
              return (
                <div className="col-6 col-lg-3">
                  <div className="info-profile-data text-center">
                    <h6
                      className="info-pro-file h5"
                      data-to="500"
                      data-speed="500"
                    >
                      {infoData.info}
                    </h6>
                    <p className="m-0px font-w-400">{infoData.Title}</p>
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
