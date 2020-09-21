import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import './PersonalDetailsHeader.scss';

export default function PersonalDetailsHeader() {
  return (
    <div className='header-container'>
      <div>
        <Paper className='paper' elevation={4}>
          <img
            src={require('../media/profilephoto.jpg')}
            style={{height: '192px', width: '192px', gridColumnStart: '0'}}
            alt='Lee Stewart'
            color='transparent'
          />
          <Typography variant='h4' style={{color: '#f50057'}}>
            Lee Stewart
          </Typography>
        </Paper>
      </div>
      <div className='header-description'>
        <Typography> Creative, proactive and engaging with an inquisitive nature and desire to learn. Has a
          background in various disciplines, both creative and technical, resulting in a broad skill-set
          and a unique approach to problem-solving. Approaches work with a desire to achieve and
          excel. Has had a life-long obsession with technology and continues to pursue this through
          self-study and work-based learning. </Typography>
      </div>
    </div>
  );
}