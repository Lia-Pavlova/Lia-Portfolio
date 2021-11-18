import React, { useState, useEffect } from 'react'
import contact from '../data/about.json'

export default function Contact() {
  const [contactData, setContact] = useState([])
  useEffect(() => {
    const contactData = contact.profile
    setContact(contactData)
  }, [contactData])

  return (
    <div className="contact section" id="contact">
      <div className="container">
        <div className="row">
          {contactData.map((contactInfo) => {
            return (
              <div className="col-md-6">
                <div className="contact-status">
                  <ul>
                    <li>
                      <h5>
                        {' '}
                        <span role="img" aria-labelledby="">
                          📨 {contactInfo.Email}
                        </span>
                      </h5>
                    </li>
                    <li>
                      <h5>
                        {' '}
                        <span role="img" aria-labelledby="">
                          📞 {contactInfo.Phone}
                        </span>
                      </h5>
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
