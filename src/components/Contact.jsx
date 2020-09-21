import React from "react";
import './Contact.scss'

export default function Contact() {
  return (
    <div className='contact-container'>
      <a href='https://github.com/zantetsuken88' target='_blank' rel='noopener noreferrer' className='logo'>
        <img
          src={require('../media/github-logo.svg')}
          alt='github logo'
          color='transparent'/>
      </a>
      <a
        href='mailto:lee.stewart@alumni.dmu.ac.uk'
        target='_blank'
        rel='noopener noreferrer'
        className='logo'>
        <img
          src={require('../media/mail.svg')}
          alt='mail logo'
          color='transparent'/>
      </a>
      <a
        href='https://www.linkedin.com/in/lee-stewart-684839ba/'
        target='_blank'
        rel='noopener noreferrer'
        className='logo'>
        <img
          src={require('../media/linkedin.svg')}
          alt='linkedin logo'
          color='transparent'/>
      </a>
    </div>
  );
}