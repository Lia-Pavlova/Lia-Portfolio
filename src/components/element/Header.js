import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar expand="lg" className="shadow bg-dark-blue py-3" sticky="top">
      <div className="container">
        <Navbar.Brand href="#home" className="logo">
          <span className="logo-icon">Lia</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">
                EDUCATION
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skill">
                SKILL
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                CONTACT
              </a>
            </li>
            <li className="nav-item">
              <a
                href="../data/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success btn-download text-white my-3 my-sm-0"
                type="button"
              >
                Resume
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
