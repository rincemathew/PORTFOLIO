"use client";

import React from 'react'
import { IonIcon } from '@ionic/react';
import { callOutline, mailOutline, logoGithub, logoLinkedin, logoInstagram } from 'ionicons/icons';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content section-content">
        <p className="section-subtitle">{`Contact`}</p>
        <h2 className="h3 section-title">{`Do you have any projects? Please drop a message.`}</h2>
        <p className="section-text">
          {`If you find my work interesting, feel free to ping. Let's stay connected on LinkedIn. I don't mind a few ⭐️ on my Git.`}
        </p>
        <ul className="contact-list">
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IonIcon icon={callOutline} />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">{`Phone:`}</h3>
              <a href="tel:9497706714" className="contact-info">{`(+91)9497706714`}</a>
            </div>
          </li>
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IonIcon icon={mailOutline} />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Email:</h3>
              <a href="mailto:rincemathewmanattu@gmail.com" className="contact-info">{`rincemathewmanattu@gmail.com`}</a>
              <a href="mailto:rincemathew.m@gmail.com" className="contact-info">{`rincemathew.m@gmail.com`}</a>
            </div>
          </li>
          <li>
            <ul className="contact-social-list">
              <li>
                <a href="https://github.com/rincemathew" className="contact-social-link">
                  <div className="tooltip">Github</div>
                  <IonIcon icon={logoGithub} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rince-mathew/" className="contact-social-link">
                  <div className="tooltip">Linkedin</div>
                  <IonIcon icon={logoLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rince_mathew_/" className="contact-social-link">
                  <div className="tooltip">Instagram</div>
                  <IonIcon icon={logoInstagram} />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact