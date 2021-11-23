import React, { useState, useEffect } from 'react'
import education from '../data/education.json'
import * as img1 from '../assets/image/certificate.png'
import * as img2 from '../assets/image/aec.jpg'

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
            {/* <div className="row ">
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
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="#ffffff"
                                  width="34"
                                  height="34"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M10 8h-5v-1h5v1zm0 1h-5v1h5v-1zm0 2h-5v1h5v-1zm-2 2h-3v1h3v-1zm10.692-3.939c-.628-.436-.544-.327-.782-1.034-.099-.295-.384-.496-.705-.496h-.003c-.773.003-.64.044-1.265-.394-.129-.092-.283-.137-.437-.137s-.308.045-.438.137c-.629.442-.492.397-1.265.394h-.003c-.321 0-.606.201-.705.496-.238.71-.156.6-.781 1.034-.198.137-.308.353-.308.578l.037.222c.242.708.242.572 0 1.278l-.037.222c0 .224.11.441.309.578.625.434.545.325.781 1.033.099.296.384.495.705.495h.003c.773-.003.64-.044 1.265.394.129.093.283.139.437.139s.308-.046.438-.138c.625-.438.49-.397 1.265-.394h.003c.321 0 .606-.199.705-.495.238-.708.154-.599.782-1.033.197-.137.307-.355.307-.579l-.037-.222c-.242-.709-.24-.573 0-1.278l.037-.222c0-.225-.11-.443-.308-.578zm-3.192 3.189c-.967 0-1.75-.784-1.75-1.75 0-.967.783-1.751 1.75-1.751s1.75.784 1.75 1.751c0 .966-.783 1.75-1.75 1.75zm1.241 2.758l.021-.008h1.238v7l-2.479-1.499-2.521 1.499v-7h1.231c.415.291.69.5 1.269.5.484 0 .931-.203 1.241-.492zm-16.741-13.008v17h11v-2h-9v-13h20v13h-2v2h4v-17h-24z" />
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
            </div> */}
            <div className="row">
              <div className="col-md-4 d-flex align-items-stretch">
                <div className="card bg-darkblue additional-education-card">
                  <div className="card-body">
                    <p className="card-text">2021 - present</p>
                    <a
                      href="https://goit.ua/fullstackonline/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5 className="card-title text-white">IT School GoIT</h5>
                    </a>

                    <ul>
                      <li>Full Stack Developer</li>
                    </ul>
                    <div className="links">
                      <ul>
                        <li>
                          <a
                            href={img1}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#ffffff"
                              width="34"
                              height="34"
                              viewBox="0 0 24 24"
                            >
                              <path d="M10 8h-5v-1h5v1zm0 1h-5v1h5v-1zm0 2h-5v1h5v-1zm-2 2h-3v1h3v-1zm10.692-3.939c-.628-.436-.544-.327-.782-1.034-.099-.295-.384-.496-.705-.496h-.003c-.773.003-.64.044-1.265-.394-.129-.092-.283-.137-.437-.137s-.308.045-.438.137c-.629.442-.492.397-1.265.394h-.003c-.321 0-.606.201-.705.496-.238.71-.156.6-.781 1.034-.198.137-.308.353-.308.578l.037.222c.242.708.242.572 0 1.278l-.037.222c0 .224.11.441.309.578.625.434.545.325.781 1.033.099.296.384.495.705.495h.003c.773-.003.64-.044 1.265.394.129.093.283.139.437.139s.308-.046.438-.138c.625-.438.49-.397 1.265-.394h.003c.321 0 .606-.199.705-.495.238-.708.154-.599.782-1.033.197-.137.307-.355.307-.579l-.037-.222c-.242-.709-.24-.573 0-1.278l.037-.222c0-.225-.11-.443-.308-.578zm-3.192 3.189c-.967 0-1.75-.784-1.75-1.75 0-.967.783-1.751 1.75-1.751s1.75.784 1.75 1.751c0 .966-.783 1.75-1.75 1.75zm1.241 2.758l.021-.008h1.238v7l-2.479-1.499-2.521 1.499v-7h1.231c.415.291.69.5 1.269.5.484 0 .931-.203 1.241-.492zm-16.741-13.008v17h11v-2h-9v-13h20v13h-2v2h4v-17h-24z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 d-flex align-items-stretch">
                <div className="card bg-darkblue additional-education-card">
                  <div className="card-body">
                    <p className="card-text">2008 - 2009</p>
                    <a
                      href="https://americanenglish.ua/ru/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5 className="card-title text-white">
                        American English Center
                      </h5>
                    </a>

                    <ul>
                      <li>The advanced level of instruction</li>
                    </ul>
                    <div className="links">
                      <ul>
                        <li>
                          <a
                            href={img2}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#ffffff"
                              width="34"
                              height="34"
                              viewBox="0 0 24 24"
                            >
                              <path d="M10 8h-5v-1h5v1zm0 1h-5v1h5v-1zm0 2h-5v1h5v-1zm-2 2h-3v1h3v-1zm10.692-3.939c-.628-.436-.544-.327-.782-1.034-.099-.295-.384-.496-.705-.496h-.003c-.773.003-.64.044-1.265-.394-.129-.092-.283-.137-.437-.137s-.308.045-.438.137c-.629.442-.492.397-1.265.394h-.003c-.321 0-.606.201-.705.496-.238.71-.156.6-.781 1.034-.198.137-.308.353-.308.578l.037.222c.242.708.242.572 0 1.278l-.037.222c0 .224.11.441.309.578.625.434.545.325.781 1.033.099.296.384.495.705.495h.003c.773-.003.64-.044 1.265.394.129.093.283.139.437.139s.308-.046.438-.138c.625-.438.49-.397 1.265-.394h.003c.321 0 .606-.199.705-.495.238-.708.154-.599.782-1.033.197-.137.307-.355.307-.579l-.037-.222c-.242-.709-.24-.573 0-1.278l.037-.222c0-.225-.11-.443-.308-.578zm-3.192 3.189c-.967 0-1.75-.784-1.75-1.75 0-.967.783-1.751 1.75-1.751s1.75.784 1.75 1.751c0 .966-.783 1.75-1.75 1.75zm1.241 2.758l.021-.008h1.238v7l-2.479-1.499-2.521 1.499v-7h1.231c.415.291.69.5 1.269.5.484 0 .931-.203 1.241-.492zm-16.741-13.008v17h11v-2h-9v-13h20v13h-2v2h4v-17h-24z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
