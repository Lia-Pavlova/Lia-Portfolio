import React, { useState, useEffect } from 'react'
import { ProgressBar } from 'react-bootstrap'
import SkillData from '../data/skill.json'

export default function Skill() {
  const [skill, setSkill] = useState([])
  const [programming, setProgramming] = useState([])
  const [libraryOrFramework, setLibraryOrFramework] = useState([])
  const [tool, setTool] = useState([])
  const [softSkill, setSoftSkill] = useState([])

  useEffect(() => {
    const skill = SkillData.Web
    const programming = SkillData.Programming
    const libraryOrFramework = SkillData.LibraryOrFramework
    const tool = SkillData.Tools
    const softSkill = SkillData.SoftSkill
    setSkill(skill)
    setProgramming(programming)
    setLibraryOrFramework(libraryOrFramework)
    setTool(tool)
    setSoftSkill(softSkill)
  }, [skill, programming, libraryOrFramework, tool, softSkill])
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
              id="pills-web-tab"
              data-toggle="pill"
              href="#pills-web"
              role="tab"
              aria-controls="pills-web"
              aria-selected="true"
            >
              Web
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
              aria-selected="true"
            >
              Framework/Library
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-programming-tab"
              data-toggle="pill"
              href="#pills-programming"
              role="tab"
              aria-controls="pills-programming"
              aria-selected="false"
            >
              Programming
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
              Tool
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
              aria-selected="true"
            >
              Soft Skill
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-web"
            role="tabpanel"
            aria-labelledby="pills-web-tab"
          >
            <div className="row">
              {skill.map((skillInfo) => {
                return (
                  <div className="col-md-4">
                    <div className="card bg-darkblue mb-4">
                      <div className="card-body">
                        <div className="progress-header clearfix">
                          <h5 className="card-title float-left">
                            {skillInfo.name}
                          </h5>
                          <h6 className="card-title float-right">
                            {skillInfo.percent}%
                          </h6>
                        </div>

                        <ProgressBar
                          className="bg-dark"
                          animated
                          variant="success"
                          style={{ height: '1px' }}
                          now={skillInfo.percent}
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
              {libraryOrFramework.map((libraryOrFrameworkInfo) => {
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
            id="pills-programming"
            role="tabpanel"
            aria-labelledby="pills-programming-tab"
          >
            <div className="row">
              {programming.map((programmingInfo) => {
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
            id="pills-tool"
            role="tabpanel"
            aria-labelledby="pills-tool-tab"
          >
            <div className="row">
              {tool.map((toolInfo) => {
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
              {softSkill.map((softSkillInfo) => {
                return (
                  <div className="col-md-4">
                    <div className="card bg-darkblue mb-5">
                      <div className="card-body">
                        <div className="progress-header clearfix">
                          <h5 className="card-title float-left">
                            {softSkillInfo.name}
                          </h5>
                          <h6 className="card-title float-right">
                            {softSkillInfo.percent}%
                          </h6>
                        </div>

                        <ProgressBar
                          className="bg-dark"
                          animated
                          variant="success"
                          style={{ height: '1px' }}
                          now={softSkillInfo.percent}
                        />
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
