import Grid from "@material-ui/core/Grid";
import React from "react";

export default function Contact() {

  return (
    <Grid item xs className='details-bar'>
      <a href='https://github.com/zantetsuken88' target='_blank' rel='noopener noreferrer' className='logo'>
        <img
          src={require('../media/github-logo.svg')}
          style={{height: '64px', width: '64px', gridColumnStart: '0'}}
          alt='github logo'
          color='transparent'
        />
      </a>
      <a
        href='mailto:lee.stewart@alumni.dmu.ac.uk'
        target='_blank'
        rel='noopener noreferrer'
        className='logo'
        style={{gridColumnStart: '3'}}
      >
        <img
          src={require('../media/mail.svg')}
          style={{height: '64px', width: '64px'}}
          alt='mail logo'
          color='transparent'
        />
      </a>
      <a
        href='https://www.linkedin.com/in/lee-stewart-684839ba/'
        target='_blank'
        rel='noopener noreferrer'
        className='logo'
        style={{gridColumnStart: '5'}}
      >
        <img
          src={require('../media/linkedin.svg')}
          style={{height: '64px', width: '64px'}}
          alt='linkedin logo'
          color='transparent'
        />
      </a>
    </Grid>
  );
}