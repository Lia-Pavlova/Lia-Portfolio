import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import skillData from '../data/skill.json'

export default function Skill() {
  return (
    <section className="skill section" id="skill">
      <div className="container">
        <div className="section-title-text mb-2">
          <h1 className="dark-color">MY Skill</h1>
        </div>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="pills-programming-tab"
              data-toggle="pill"
              href="#pills-programming"
              role="tab"
              aria-controls="pills-programming"
              aria-selected="true"
            >
              Programming Language
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-libraryandframework-tab"
              data-toggle="pill"
              href="#pills-libraryandframework"
              role="tab"
              aria-controls="pills-libraryandframework"
              aria-selected="false"
            >
              Framework / Library
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-tool-tab"
              data-toggle="pill"
              href="#pills-tool"
              role="tab"
              aria-controls="pills-tool"
              aria-selected="false"
            >
              Software / Tools
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-soft-skill-tab"
              data-toggle="pill"
              href="#pills-soft-skill"
              role="tab"
              aria-controls="pills-softs-kill"
              aria-selected="false"
            >
              Soft Skill
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-programming"
            role="tabpanel"
            aria-labelledby="pills-programming-tab"
          >
            <div className="row">
              {skillData.programming.map((programmingInfo) => {
                return (
                  <div className="col-md-4">
                    <div className="card bg-darkblue mb-5">
                      <div className="card-body">
                        <div className="progress-header clearfix">
                          <h5 className="card-title float-left">
                            {programmingInfo.name}
                          </h5>
                          <h6 className="card-title float-right">
                            {programmingInfo.percent}%
                          </h6>
                        </div>

                        <ProgressBar
                          className="bg-dark"
                          animated
                          variant="success"
                          style={{ height: '1px' }}
                          now={programmingInfo.percent}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-libraryandframework"
            role="tabpanel"
            aria-labelledby="pills-libraryandframework-tab"
          >
            <div className="row">
              {skillData.libraryOrFramework.map((libraryOrFrameworkInfo) => {
                return (
                  <div className="col-md-4">
                    <div className="card bg-darkblue mb-5">
                      <div className="card-body">
                        <div className="progress-header clearfix">
                          <h5 className="card-title float-left">
                            {libraryOrFrameworkInfo.name}
                          </h5>
                          <h6 className="card-title float-right">
                            {libraryOrFrameworkInfo.percent}%
                          </h6>
                        </div>

                        <ProgressBar
                          className="bg-dark"
                          animated
                          variant="success"
                          style={{ height: '1px' }}
                          now={libraryOrFrameworkInfo.percent}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-tool"
            role="tabpanel"
            aria-labelledby="pills-tool-tab"
          >
            <div className="row">
              {skillData.tools.map((toolInfo) => {
                return (
                  <div className="col-md-4">
                    <div className="card bg-darkblue mb-5">
                      <div className="card-body">
                        <div className="progress-header clearfix">
                          <h5 className="card-title float-left">
                            {toolInfo.name}
                          </h5>
                          <h6 className="card-title float-right">
                            {toolInfo.percent}%
                          </h6>
                        </div>

                        <ProgressBar
                          className="bg-dark"
                          animated
                          variant="success"
                          style={{ height: '1px' }}
                          now={toolInfo.percent}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-soft-skill"
            role="tabpanel"
            aria-labelledby="pills-soft-skill-tab"
          >
            <div className="row">
              {skillData.softSkill.map((softSkillInfo) => {
                return (
                  <div className="col-md-4">
                    <div className="card bg-darkblue mb-5">
                      <div className="card-body">
                        <div className="progress-header clearfix">
                          <h5 className="card-title float-left">
                            {softSkillInfo.name}
                          </h5>
                        </div>
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
