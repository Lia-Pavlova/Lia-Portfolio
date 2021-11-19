import React, { useState, useEffect } from 'react'
import education from '../data/education.json'
import '../assets/image/certificate.png'
import '../assets/image/aec.jpg'

export default function Education() {
  const [educationData, setEducation] = useState([])
  const [additionalEdData, setAdditionalEd] = useState([])
  const [workExpData, setWorkExp] = useState([])
  useEffect(() => {
    const educationData = education.education
    const additionalEdData = education.additionalEd
    const workExpData = education.workExp
    setEducation(educationData)
    setAdditionalEd(additionalEdData)
    setWorkExp(workExpData)
  }, [educationData, additionalEdData, workExpData])

  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="section-title-text">
          <h1 className="dark-color">Education</h1>
        </div>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-education-tab"
              data-toggle="pill"
              href="#pills-education"
              role="tab"
              aria-controls="pills-education"
              aria-selected="true"
            >
              Education
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-additional-education-tab"
              data-toggle="pill"
              href="#pills-additional-education"
              role="tab"
              aria-controls="pills-additional-education"
              aria-selected="false"
            >
              Additional Education
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-work-experience-tab"
              data-toggle="pill"
              href="#pills-work-experience"
              role="tab"
              aria-controls="pills-work-experience"
              aria-selected="false"
            >
              Work Experience
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-education"
            role="tabpanel"
            aria-labelledby="pills-education-tab"
          >
            <div className="row ">
              {educationData.map((educationInfo) => {
                return (
                  <div className="col-md-4 d-flex align-items-stretch">
                    <div className="card bg-darkblue education-card">
                      <div className="card-body">
                        <p className="card-text">{educationInfo.year}</p>
                        <h5 className="card-title text-white ">
                          {educationInfo.companyName}
                        </h5>
                        <ul>
                          <li>{educationInfo.role1}</li>
                          <li>{educationInfo.role2}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-additional-education"
            role="tabpanel"
            aria-labelledby="pills-additional-education-tab"
          >
            <div className="row ">
              {additionalEdData.map((additionalInfo) => {
                return (
                  <div className="col-md-4 d-flex align-items-stretch">
                    <div className="card bg-darkblue additional-education-card">
                      <div className="card-body">
                        <p className="card-text">{additionalInfo.year}</p>
                        <a
                          href={additionalInfo.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h5 className="card-title text-white">
                            {additionalInfo.companyName}
                          </h5>
                        </a>

                        <ul>
                          <li>{additionalInfo.role1}</li>
                        </ul>
                        <div className="links">
                          <ul>
                            <li>
                              <a
                                href={additionalInfo.certificate}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <h6 className="card-title text-white">
                                  Certificate
                                </h6>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="#ffffff"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z" />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-work-experience"
            role="tabpanel"
            aria-labelledby="pills-work-experience-tab"
          >
            <div className="row ">
              {workExpData.map((workInfo) => {
                return (
                  <div className="col-md-4 d-flex align-items-stretch">
                    <div className="card bg-darkblue work-experience-card">
                      <div className="card-body">
                        <p className="card-text">{workInfo.year}</p>
                        <a
                          href={workInfo.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h5 className="card-title text-white ">
                            {workInfo.companyName}
                          </h5>
                        </a>

                        <ul>
                          <li>{workInfo.role1}</li>
                          <li>{workInfo.role2}</li>
                          <li>{workInfo.role3}</li>
                          <li>{workInfo.role4}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
