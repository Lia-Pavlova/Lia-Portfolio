import React from 'react'
import contact from '../data/about.json'

export default function Contact() {
  return (
    <div className="contact section" id="contact">
      <div className="container">
        <div className="row">
          {contact.profile.map((contactInfo) => {
            return (
              <div className="col-md-6">
                <div className="contact-status">
                  <ul>
                    <li>
                      <h5>{contactInfo.email}</h5>
                    </li>
                    <li>
                      <h5>{contactInfo.phone}</h5>
                    </li>
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
