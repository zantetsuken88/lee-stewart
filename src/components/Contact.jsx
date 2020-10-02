import React from 'react';
import './Contact.scss';
import githubLogo from '../media/githubLogo.svg';
import mail from '../media/mail.svg';
import linkedIn from '../media/linkedIn.svg';
import PropTypes from 'prop-types';

const ContactLink = ({ link, img, alt }) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' className='logo'>
      <img
        src={img}
        alt={alt}
        color='transparent'
      />
    </a>);
};

ContactLink.propTypes = {
  link: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string
};

export default function Contact() {
  return (
    <div className='contact-container'>
      <ContactLink
        link='https://github.com/zantetsuken88'
        img={githubLogo}
        alt='GitHub'
      />
      <ContactLink
        link='mailto:lee.stewart@alumni.dmu.ac.uk'
        img={mail}
        alt='Email'
      />
      <ContactLink
        link='https://www.linkedin.com/in/lee-stewart-684839ba/'
        img={linkedIn}
        alt='LinkedIn'
      />
    </div>
  );
}
